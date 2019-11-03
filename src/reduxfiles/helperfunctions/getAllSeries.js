function getAllSeries(candle, volume, symbol, allSeries) {
    var series = [];
    allSeries.forEach(ser => {
        if(ser.type === 'candlestick') {
            var primaryseries = {
                type: "candlestick",
                name: `${symbol}`,
                data: candle,
                id: 'primary',
                dataGrouping: {
                    enabled: false
                    }
            };
            series.push(primaryseries);
        } else { if(ser.name === 'Volume') {
                    var secondaryseries = {
                    type: "column",
                    name: "Volume",
                    data: volume,
                    id: 'secondary',
                    yAxis: 1,
                    dataGrouping: {
                        enabled: false
                        }
                    }
                    series.push(secondaryseries);
                } else {
                    series.push(ser);
                }}
        
    });
    return series;
}


function getAllSeriesdummy(allSeries) {
    var series = [];
    allSeries.forEach(ser => {
        if(ser.type === 'candlestick') {
            var primaryseries = {
                type: "candlestick",
                name: '',
                data: [],
                id: 'primary',
                dataGrouping: {
                    enabled: false
                    }
            };
            series.push(primaryseries);
        } else { if(ser.name === 'Volume') {
                    var secondaryseries = {
                    type: "column",
                    name: "Volume",
                    data: [],
                    id: 'secondary',
                    yAxis: 1,
                    dataGrouping: {
                        enabled: false
                        }
                    }
                    series.push(secondaryseries);
                } else {
                    series.push(ser);
                }}
        
    });
    return series;
}

export {getAllSeries, getAllSeriesdummy}