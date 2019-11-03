import {createAction} from 'redux-starter-kit';


const addIndicator = createAction('ChartView/highstock/addIndicator', function prepare() {
  return {
    payload: {
          seriesInfo: {
            type: 'sma',
            linkedTo: 'primary',
            params: {
                period: 14
            }
          },

          seriesChartOption: {
            type: 'sma',
            linkedTo: 'primary',
            params: {
                period: 14
            }
          }
}}});

export default addIndicator;