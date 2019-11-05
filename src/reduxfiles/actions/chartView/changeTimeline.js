import axios from 'axios';
import { CHANGE_TIMELINE, CLEAR_SERIES_DATA } from '../types';
import getUrl from '../../helperfunctions/getUrl';
import { ohlcDataHS, volumeDataHS } from '../../helperfunctions/getDataHS';
import getRangeSelectorHS from '../../helperfunctions/getRangeSelectorHS';
import {getAllSeries, getEmptySeries} from '../../helperfunctions/getAllSeries';


function changeTimelinePaylod(allSeries, candle, volume, rangeSelected, newTimeline, symbol){
    let payload = {};
    payload['series'] = getAllSeries(candle, volume, symbol, allSeries);
    payload['timeline'] = newTimeline;
    payload['rangeSelector'] = { selected: rangeSelected };
    payload['title'] = {text: `${symbol}`};
    return payload;
}


const changeTimeline = (newTimeline, symbol, activeSeries) => dispatch => {
    dispatch({
        type: CLEAR_SERIES_DATA,
        payload: {'series': getEmptySeries(activeSeries, symbol)}
    })
    
    let url =  getUrl(newTimeline, symbol);
    let rangeSelected = getRangeSelectorHS(newTimeline);
    axios.get(url)
    .then((res) => {
        let candle  = ohlcDataHS(res.data);
        let volume = volumeDataHS(res.data)
        let payload = changeTimelinePaylod(activeSeries, candle, volume, 
            rangeSelected, newTimeline, symbol);
        dispatch({
            type: CHANGE_TIMELINE,
            payload: {...payload}
        })
    })
    .catch(err => console.log(err)); 
}

export default changeTimeline;