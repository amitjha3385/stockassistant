function ohlcDataHS(data) {
    var ohlc = [];
    data.forEach(row => {
        // d represents timeframe, day, week or month
        var d = new Date(row.date).getTime() + 86400000;
        ohlc.push([
            d,
            row.open,
            row.high,
            row.low,
            row.close
        ]);
    });
    var ohlcSorted = ohlc.sort((a, b) => {
        return a[0] - b[0];
      });
    return ohlcSorted
}


function volumeDataHS(data) {
    var vol = [];
    data.forEach(row => {
        // d represents timeframe, day, week or month
        var d = new Date(row.date).getTime() + 86400000;
        vol.push([ d, row.volume]);
    });
    var volSorted = vol.sort((a, b) => {
        return a[0] - b[0];
    });

return volSorted;
}


export { ohlcDataHS, volumeDataHS }