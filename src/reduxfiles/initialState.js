const initialState = {
        symbol: '',
        chartOptions: {
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
                text: '',
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
                    name: '',
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
                }
};

export default initialState;