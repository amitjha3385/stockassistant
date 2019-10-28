import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { blueGrey } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';


import Header from '../layout/Header'
import ChartView from './ChartView';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[400],
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});


const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(1,2),
    background: '#fcfcfc',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#fcfcfc',
  },
};

function Dashboard(props) {
  
  const { classes } = props;
  
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className={classes.root}>
          <CssBaseline />
          <div className={classes.app}>
            <Header />
            <main className={classes.main}>
              <Paper>
                <ChartView />
              </Paper>
            </main>
            <footer className={classes.footer}>
              <Copyright />
            </footer>
          </div>
        </div>
      </Paper>
      

    </ThemeProvider>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);

