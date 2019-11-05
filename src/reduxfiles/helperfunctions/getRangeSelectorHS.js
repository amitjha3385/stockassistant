export default function getRangeSelectorHS(timeline, symbol){
    var selection = 2;
    if(timeline === 'W'){
        selection = 4;
    }
    if(timeline === 'M'){
        selection = 5;
    }
    return selection;
};