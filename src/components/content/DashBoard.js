import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import CandleChart from '../charting/ChartHighStock'
import Layout from '../layout/Layout';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className='LayoutChart'>
        <div className='Layout'>
            <Layout/>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                    {/* Recent Orders */}
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                          <CandleChart symbol="SBIN"/>
                        </Paper>
                      </Grid>
                    </Grid>
                </Container>
          </main>
        </div>
    </div>
  );
}
