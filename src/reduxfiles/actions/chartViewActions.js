import axios from 'axios';
import CHANGE_SYMBOL from './types'


const changeSymbol = (symbol) => dispatch => {
        const ohlc = [];
        const volume = [];
        axios.get(`http://localhost:3004/dailydata?symbol=${symbol}`)
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
        const chartOptionsUpdate= {
            symbol,
            title: {
            text: `${symbol}`
            },
            series: [
            {
                type: "candlestick",
                name: `${symbol}`,
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
        }
        dispatch({
            type: CHANGE_SYMBOL,
            payload: {...chartOptionsUpdate}
        })
        })
        .catch(err => console.log(err)); 
    }

export default changeSymbol;