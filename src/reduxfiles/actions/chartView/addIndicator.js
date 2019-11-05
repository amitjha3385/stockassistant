import {createAction} from 'redux-starter-kit';


const addIndicator = createAction('ChartView/highstock/addIndicator', function prepare() {
  return {
    payload: {
          seriesInfo: {
            type: 'sma',
            linkedTo: 'secondary',
            params: {
                period: 30
            },
            marker: {
              enabled: false
          },
          yAxis: 1,
          },

          seriesChartOption: {
            type: 'sma',
            linkedTo: 'secondary',
            params: {
                period: 30
            },
            marker: {
              enabled: false
          },
          yAxis: 1,
          }
}}});

export default addIndicator;