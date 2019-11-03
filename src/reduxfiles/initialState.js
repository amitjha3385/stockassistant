const initialState = {
        symbol: '',
        timeline: 'D', 
        activeSeries: [{
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
        }],
        
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
                navigator:{
                    adaptToUpdatedData: false
                },

                chart: {
                height: (3/8 * 100) + '%',
                animation: false
                },

                stockTools: {
                    gui: {
                        enabled: false // disable the built-in toolbar
                    }
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
                },
                {
                    type: "column",
                    name: "Volume",
                    data: [],
                    yAxis: 1,
                }
                ],
            }   
};

export default initialState;