import {createReducer} from 'redux-starter-kit';
import initialState from '../initialState';
import addIndicator from '../actions/chartView/addIndicator';


const chartViewReducer = createReducer({chartViewReducer: {...initialState}}, {
  'Dummy': (state, action) =>  {
    state.chartOptions.series = action.payload.series;
  },
  'ChartView/changeSymbol': (state, action) =>  {
      state.symbol = action.payload.symbol;
      state.chartOptions.title = action.payload.title;
      state.chartOptions.series = action.payload.series;
      state.chartOptions.rangeSelector = action.payload.rangeSelector;
    },
  'ChartView/changeTimeline': (state, action) =>  {
      state.timeline = action.payload.timeline;
      state.chartOptions.title= action.payload.title;
      state.chartOptions.series = action.payload.series;
      state.chartOptions.rangeSelector = action.payload.rangeSelector;
    },
    [addIndicator]: (state, action) =>  {
      state.chartOptions.series.push(action.payload.seriesChartOption);
      state.activeSeries.push(action.payload.seriesInfo);
    }
})

export default chartViewReducer;