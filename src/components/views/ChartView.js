import React from 'react';
import { connect } from 'react-redux';

import CandleChart from '../charting/CandleChart';
import ChartPrimaryToolbar from '../charting/ChartPrimaryToolbar'
import changeSymbol from '../../reduxfiles/actions/chartView/changeSymbol';
import changeTimeline from '../../reduxfiles/actions/chartView/changeTimeline';
import addIndicator from '../../reduxfiles/actions/chartView/addIndicator';


function ChartView(props) {
  const {chartOptions, changeSymbol, changeTimeline, addIndicator, timeline, symbol, activeSeries} = props;
  var renderChart = (symbol === '') ? false : true;
  return (
      <div>
          < ChartPrimaryToolbar 
            onUpdateSymbol = {changeSymbol}
            onChangeTimeline = {changeTimeline}
            onAddIndicator = {addIndicator}
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

const mapDispatchToProps = {
  changeSymbol,
  changeTimeline,
  addIndicator,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartView);

