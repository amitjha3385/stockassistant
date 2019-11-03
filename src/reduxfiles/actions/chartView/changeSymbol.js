import axios from 'axios';
import { CHANGE_SYMBOL } from '../types'
import getUrl from '../../helperfunctions/getUrl';
import { ohlcDataHS, volumeDataHS } from '../../helperfunctions/getDataHS';
import getRangeSelectorHS from '../../helperfunctions/getRangeSelectorHS';
import {getAllSeries} from '../../helperfunctions/getAllSeries';


function changeSymbolPaylod(allSeries, candle, volume, rangeSelected, symbol){
    let payload = {};
    payload['symbol'] = symbol;
    payload['series'] = getAllSeries(candle, volume, symbol, allSeries);
    payload['rangeSelector'] = { selected: rangeSelected };
    payload['title'] = {text: `${symbol}`};
    return payload;
}


const changeSymbol = (symbol, timeline, activeSeries) => dispatch => {
    let url =  getUrl(timeline, symbol);
    let rangeSelected = getRangeSelectorHS(timeline);

    axios.get(url)
    .then((res) => {
        let candle  = ohlcDataHS(res.data);
        let volume = volumeDataHS(res.data);
        let payload = changeSymbolPaylod(activeSeries, candle, 
            volume, rangeSelected, symbol);
        dispatch({
            type: CHANGE_SYMBOL,
            payload: {...payload}
        })
    })
    .catch(err => console.log(err)); 
    }
    
export default changeSymbol;