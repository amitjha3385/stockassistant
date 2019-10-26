import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Header from '../layout/Header';
import CandleChart from '../charting/ChartHighStock';
import SearchBar from '../layout/SearchBar'
import { blueGrey } from '@material-ui/core/colors';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';


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
      main: blueGrey[700],
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

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#fcfcfc',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#fcfcfc',
  },
};

function Dashboard(props) {
  
  const { classes } = props;
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [chartSymbol, setChartSymbol] = React.useState({symbol: ''});
  function updateSymbol(newSymbol) {
    setChartSymbol({symbol: newSymbol});
  };
  
  const options = {
    plotOptions: {
      candlestick: {
          color: '#d17d61', //red
          upColor: '#7c9c7c' // green
      },
      column: {
          color: '#66ccff', 
      }
    },
    chart: {
      height: 600,
      animation: false
    },
    
    rangeSelector: {
      selected: 1
    },
    
    title: {
      text: `${chartSymbol.symbol}`
    },
    
    yAxis: [
      {
        labels: {
          align: "right",
          x: -3
        },
        title: {
          text: "OHLC"
        },
        height: "75%",
        lineWidth: 2,
        resize: {
          enabled: true
        }
      },
      {
        labels: {
          align: "right",
          x: -3
        },
        title: {
          text: "Volume"
        },
        top: "80%",
        height: "20%",
        offset: 0,
        lineWidth: 2,
        resize: {
          enabled: true
        }
      }
    ],
    
    tooltip: {
      split: true
    },
    
    series: [
      {
        type: "candlestick",
        name: `${chartSymbol.symbol}`,
        data: [],
        visible:true
      },
      {
        type: "column",
        name: "Volume",
        data: [],
        yAxis: 1,
        visible:true
      }
    ]
    };
  
  const [chartOptions, setChartOptions] = React.useState(options);
  function updateChart(newOption) {
    setChartOptions(newOption);
    };

  if (chartSymbol.symbol !== '') {
    if ((chartOptions.series[0].name !== chartSymbol.symbol)) {
      const ohlc = [];
      const volume = [];
      
      axios.get(`http://localhost:3004/dailydata?symbol=${chartSymbol.symbol}`)
      .then((res) => {
        res.data.forEach(daydata => {
          var day = new Date(daydata.date).getTime();
          ohlc.push([
              day,
              daydata.open,
              daydata.high,
              daydata.low,
              daydata.close
          ]);

          volume.push([
            day,
            daydata.volume
          ]);
        });
        const newchartOptions = {
          title: {
            text: `${chartSymbol.symbol}`
          },
          series: [
            {
              type: "candlestick",
              name: `${chartSymbol.symbol}`,
              data: ohlc,
              id: 'primary',
              visible: true
            },
            {
              type: "column",
              name: "Volume",
              data: volume,
              id: 'secondary',
              yAxis: 1,
              visible: true
            }
          ]
        };
        updateChart(newchartOptions);
      })
      .catch(err => console.log(err)); 
    }
  }

  var renderChart = (chartSymbol.symbol === '')?false:true
  
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className={classes.root}>
          <CssBaseline />
          <div className={classes.app}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <main className={classes.main}>
              <Paper>
                < SearchBar 
                  onUpdateSymbol = {updateSymbol}
                />
                <CandleChart  
                  chartOption = {chartOptions}
                  toRenderChart = {renderChart}
                />
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

