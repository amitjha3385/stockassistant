import React from 'react';
import { connect } from 'react-redux';

import CandleChart from '../charting/CandleChart';
import PrimaryToolbar from '../charting/PrimaryToolbar'


function ChartView(props) {
  const {chartOptions, timeline, symbol, activeSeries} = props;
  var renderChart = (symbol === '') ? false : true;
  return (
      <div>
          < PrimaryToolbar 
            timeline = {timeline}
            symbol = {symbol}
            activeSeries = {activeSeries}
          />
          <CandleChart  
            chartOption = {chartOptions}
            toRenderChart = {renderChart}
          />
    </div>
  );
}

const mapStateToProps = state => ({
  chartOptions: state.chartViewReducer.chartOptions,
  timeline: state.chartViewReducer.timeline,
  symbol: state.chartViewReducer.symbol,
  activeSeries: state.chartViewReducer.activeSeries
})



export default connect(mapStateToProps, null)(ChartView);

