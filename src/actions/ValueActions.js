import dispatcher from '../dispatcher';

export function changeValue(text){
    dispatcher.dispatch({
        type: "CHANGE_VALUE",
        text    
    })
}

export function cleanValue(){
    dispatcher.dispatch({
        type: "CLEAN_VALUE"
    })
}