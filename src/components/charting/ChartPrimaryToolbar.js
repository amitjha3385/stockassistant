import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import SearchBar from '../layout/SearchBar';



const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    padding: theme.spacing(1, 1, 1, 1)
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  butto: {}
});

function ChartPrimaryToolbar(props) {
  const { classes, onUpdateSymbol, onChangeTimeline, onAddIndicator, timeline, symbol, activeSeries } = props;
  
  const inputLabel = React.useRef(null);
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    var newtimeline = event.target.value;
    setValue(newtimeline);
    onChangeTimeline(newtimeline, symbol, activeSeries);
  };
  return (
    <div>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
          <Grid item xs>
              < SearchBar 
                onUpdateSymbol = {onUpdateSymbol}
                timeline = {timeline}
                activeSeries = {activeSeries}
              />
            </Grid>

            <Grid item xs>
                <FormControl  className={classes.formControl} color='secondary'>
                  <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                    Timeline
                  </InputLabel>
                  <Select
                    id="demo-simple-select-outlined"
                    value={value}
                    onChange={handleChange}
                  >
                  <MenuItem value={'D'}>Daily</MenuItem>
                  <MenuItem value={'W'}>Weekly</MenuItem>
                  <MenuItem value={'M'}>Monthly</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs>
            <Button 
              variant="contained"
              onClick={onAddIndicator}
            >
              Change Something
            </Button>
            </Grid>
         
          </Grid>
        </Toolbar>
    </div>
  );
}

ChartPrimaryToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartPrimaryToolbar);