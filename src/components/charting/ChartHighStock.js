import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from 'axios'
import Indicators from "highcharts/indicators/indicators-all.js";
import DragPanes from "highcharts/modules/drag-panes.js";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
import PriceIndicator from "highcharts/modules/price-indicator.js";
import FullScreen from "highcharts/modules/full-screen.js";
import StockTools from "highcharts/modules/stock-tools.js";
import PropTypes from 'prop-types';

import "./style.css";

// init the module
Indicators(Highcharts);
DragPanes(Highcharts);
AnnotationsAdvanced(Highcharts);
PriceIndicator(Highcharts);
FullScreen(Highcharts);
StockTools(Highcharts);


export default function CandleChart(props) {
  
  // const  groupingUnits = [
  //   [
  //     "week", // unit name
  //     [1] // allowed multiples
  //   ],
  //   ["month", [1, 2, 3, 4, 6]]
  // ];

  var options = {
    chart: {
      height: 700,
    },
    
    rangeSelector: {
      selected: 1
    },
    
    title: {
      text: `${props.symbol} Historical`
    },
    
    yAxis: [
      {
        labels: {
          align: "right",
          x: -3
        },
        title: {
          text: "OHLC"
        },
        height: "75%",
        lineWidth: 2,
        resize: {
          enabled: true
        }
      },
      {
        labels: {
          align: "right",
          x: -3
        },
        title: {
          text: "Volume"
        },
        top: "80%",
        height: "20%",
        offset: 0,
        lineWidth: 2,
        resize: {
          enabled: true
        }
      }
    ],
    
    tooltip: {
      split: true
    },
    
    series: [
      {
        type: "candlestick",
        name: `${props.symbol}`,
        data: [],
        visible:true
      },
      {
        type: "column",
        name: "Volume",
        data: [],
        yAxis: 1,
        visible:true
      }
    ]
    };
    var [chartOptions, setChartOptions] = React.useState(options);
    
    function updateChart(newOption) {
    setChartOptions(newOption);
    };

    if (chartOptions.series[0].data.length === 0) {
      const ohlc = [];
      const volume = [];
      axios.get(`http://localhost:3004/dailydata?symbol=${props.symbol}`)
      .then((res) => {
        res.data.forEach(daydata => {
          var day = new Date(daydata.date).getTime();
          ohlc.push([
              day,
              daydata.open,
              daydata.high,
              daydata.low,
              daydata.close
          ]);

          volume.push([
            day,
            daydata.volume
          ]);
        });
        const newchartOptions = {
          series: [
            {
              type: "candlestick",
              name: `${props.symbol}`,
              data: ohlc,
              id: 'primary',
              visible: true
            },
            {
              type: "column",
              name: "Volume",
              data: volume,
              id: 'secondary',
              yAxis: 1,
              visible: true
            }
          ]
        };
        updateChart(newchartOptions);
      })
      .catch(err => console.log(err)); 
    } 
    
    return (
      <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={chartOptions}
      />
    </div>
    )}            

    CandleChart.propTypes = {
      symbol: PropTypes.string.isRequired,
    };