export default function getRangeSelectorHS(timeline, symbol){
    var selection = 1;
    if(timeline === 'W'){
        selection = 4;
    }
    if(timeline === 'M'){
        selection = 5;
    }
    return selection;
};