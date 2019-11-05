import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

import SearchBar from '../layout/SearchBar';
import TimeLineSelector from './TimeLineSelector';
import AddIndicator from './AddIndicator';

import changeSymbol from '../../reduxfiles/actions/chartView/changeSymbol';
import changeTimeline from '../../reduxfiles/actions/chartView/changeTimeline';
import addIndicator from '../../reduxfiles/actions/chartView/addIndicator';



function PrimaryToolbar(props) {
  const { changeSymbol, changeTimeline, addIndicator, timeline, symbol, activeSeries } = props;
  
  return (
    <div>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
          <Grid item xs>
              < SearchBar 
                changeSymbol = {changeSymbol}
                timeline = {timeline}
                activeSeries = {activeSeries}
              />
            </Grid>
            <Grid item xs>
                < TimeLineSelector 
                  changeTimeline = {changeTimeline}
                  symbol = {symbol}
                  activeSeries = {activeSeries}
                />
            </Grid>
            <Grid item xs>
                < AddIndicator 
                  addIndicator = {addIndicator}
                />
            </Grid>        
          </Grid>
        </Toolbar>
    </div>
  );
}


const mapDispatchToProps = {
  changeSymbol,
  changeTimeline,
  addIndicator,
}

export default connect(null, mapDispatchToProps)(PrimaryToolbar);

