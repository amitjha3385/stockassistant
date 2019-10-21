import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors'



const theme = createMuiTheme({
    palette: {
        primary:{
            main: blueGrey[600],
        },
    }
});



ReactDOM.render(
<ThemeProvider theme={theme}>
<App />
</ThemeProvider>
, document.getElementById('root'));


