import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      padding: theme.spacing(1, 1, 1, 1)
    }
  }));

  export default function TimeLineSelector(props) {
    const { changeTimeline,  symbol, activeSeries } = props;
    const classes = useStyles();
    
    const inputLabel = React.useRef(null);
    const [value, setValue] = React.useState('');

    const handleChange = event => {
      var newtimeline = event.target.value;
      setValue(newtimeline);
      changeTimeline(newtimeline, symbol, activeSeries);
    };

    return (
      <div>
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
      </div>
    );
  }

