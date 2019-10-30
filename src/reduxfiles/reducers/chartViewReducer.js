import {createReducer} from 'redux-starter-kit';
import initialState from '../initialState';

const chartViewReducer = createReducer({chartViewReducer: {...initialState}}, {
    'ChartView/changeSymbol': (state, action) =>  {
                                  state.symbol = action.payload.symbol;
                                  state.chartOptions.title = action.payload.title;
                                  state.chartOptions.series = action.payload.series;
                                },
    // [changeSymbol]: (state, action) =>  {
    //                   state.symbol = action.payload.symbol;
    //                   state.chartOptions.title = action.payload.title;
    //                   state.chartOptions.series = action.payload.series;
    //                 },
  })
export default chartViewReducer;