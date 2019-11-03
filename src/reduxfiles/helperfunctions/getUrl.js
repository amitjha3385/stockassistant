export default function getUrl(timeline, symbol){
    
    var url = `http://localhost:3004/dailydata?symbol=${symbol}`;
    
    if(timeline === 'W'){
        url = `http://localhost:3004/weeklydata?symbol=${symbol}`;
    }
    if(timeline === 'M'){
        url = `http://localhost:3004/monthlydata?symbol=${symbol}`;
    }
    return url;
};