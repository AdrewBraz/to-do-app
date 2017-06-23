import dispatcher from '../dispatcher';

export function createItem(text){
    dispatcher.dispatch({
        type: "CREATE_ITEM",
        text
    });
} 

export function getText(value){
    dispatcher.dispatch({
        type: "GET_TEXT",
        value
    })
}

export function deleteItem(id){
    dispatcher.dispatch({
        type: "DELETE_ITEM",
        id
    });
} 

export function deleateAllItems(){
    dispatcher.dispatch({
        type: "DELEATE_ALL"
    });
} 