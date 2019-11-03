import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import Indicators from "highcharts/indicators/indicators-all.js";
import DragPanes from "highcharts/modules/drag-panes.js";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
import PriceIndicator from "highcharts/modules/price-indicator.js";
import FullScreen from "highcharts/modules/full-screen.js";
import StockTools from "highcharts/modules/stock-tools.js";


// init the module
Indicators(Highcharts);
DragPanes(Highcharts);
AnnotationsAdvanced(Highcharts);
PriceIndicator(Highcharts);
FullScreen(Highcharts);
StockTools(Highcharts);

export default function CandleChart(props) {
    const { chartOption, toRenderChart } = props;
    
    // }
    if(!toRenderChart) {
      return null;
    }
    return (
      <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={{...chartOption}}
      />
    </div>
    )}            