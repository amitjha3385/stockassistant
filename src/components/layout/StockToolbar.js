import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  button: {
    borderColor: lightColor,
  },
});

function StockToolbar (props) {
  const { classes } = props;
  return (
    <React.Fragment>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs>
            <Button variant="contained" className={classes.button}>
                Change Something
             </Button> 
            </Grid>
          </Grid>
        </Toolbar>
    </React.Fragment>
  );
}

StockToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StockToolbar);