import axios from 'axios';
import { CHANGE_TIMELINE } from '../types';
import getUrl from '../../helperfunctions/getUrl';
import { ohlcDataHS, volumeDataHS } from '../../helperfunctions/getDataHS';
import getRangeSelectorHS from '../../helperfunctions/getRangeSelectorHS';
import {getAllSeries, getAllSeriesdummy} from '../../helperfunctions/getAllSeries';


function changeTimelinePaylod(allSeries, candle, volume, rangeSelected, newTimeline, symbol){
    let payload = {};
    payload['series'] = getAllSeries(candle, volume, symbol, allSeries);
    payload['timeline'] = newTimeline;
    payload['rangeSelector'] = { selected: rangeSelected };
    payload['title'] = {text: `${symbol}`};
    return payload;
}


const changeTimeline = (newTimeline, symbol, activeSeries) => dispatch => {
    
    let url =  getUrl(newTimeline, symbol);
    let rangeSelected = getRangeSelectorHS(newTimeline);
    dispatch({
        type: 'Dummy',
        payload: {'series': getAllSeriesdummy(activeSeries)}
    })
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