import React from 'react';
import { connect } from 'react-redux';

import CandleChart from '../charting/CandleChart';
import SearchBar from '../layout/SearchBar'
import changeSymbol from '../../reduxfiles/actions/chartViewActions';


function ChartView(props) {
  const { chartSymbol, chartOptions, changeSymbol} = props;
  var renderChart = (chartSymbol === '')?false:true
  return (
      <div>
          < SearchBar 
            onUpdateSymbol = {changeSymbol}
          />
          <CandleChart  
            chartOption = {chartOptions}
            toRenderChart = {renderChart}
          />
    </div>
  );
}

const mapStateToProps = state => ({
  chartSymbol: state.chartViewReducer.symbol,
  chartOptions: state.chartViewReducer.chartOptions
})

const mapDispatchToProps = {
  changeSymbol
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartView);

