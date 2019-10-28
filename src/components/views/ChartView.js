import React from 'react';
import axios from 'axios';

import CandleChart from '../charting/CandleChart';
import SearchBar from '../layout/SearchBar'
import options from '../charting/chartOptions'


function ChartView() {
  
  const [chartSymbol, setChartSymbol] = React.useState({symbol: ''});
  function updateSymbol(newSymbol) {
    setChartSymbol({symbol: newSymbol});
  };
  
  
  const [chartOptions, setChartOptions] = React.useState(options);
  function updateChart(newOption) {
    setChartOptions(newOption);
    };

  if (chartSymbol.symbol !== '') {
    if ((chartOptions.series[0].name !== chartSymbol.symbol)) {
      const ohlc = [];
      const volume = [];
      
      axios.get(`http://localhost:3004/dailydata?symbol=${chartSymbol.symbol}`)
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
          title: {
            text: `${chartSymbol.symbol}`
          },
          series: [
            {
              type: "candlestick",
              name: `${chartSymbol.symbol}`,
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
  }

  var renderChart = (chartSymbol.symbol === '')?false:true
  
  return (
      <div>
                < SearchBar 
                  onUpdateSymbol = {updateSymbol}
                />
                <CandleChart  
                  chartOption = {chartOptions}
                  toRenderChart = {renderChart}
                />
    </div>
  );
}


export default ChartView;

