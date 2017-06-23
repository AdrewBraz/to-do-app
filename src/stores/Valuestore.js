import { EventEmitter } from 'events';
import dispatcher from "../dispatcher";

class ValueStore extends EventEmitter{
    constructor(){
        super();
        this.value = '';
    }

    getValue(){
        return this.value;
    }

    changeValue(text){
        this.value = text;
        this.emit('change');
    }

    cleanValue(){
        this.value = '';
        this.emit('change')
    }


    actionsHandler(action){
        switch(action.type){
            case "CHANGE_VALUE":{
                this.changeValue(action.text);
                break;
            }
            case "CLEAN_VALUE":{
                this.cleanValue();
                break;
            }
        }
    }
}

const valueStore = new ValueStore;
dispatcher.register(valueStore.actionsHandler.bind(valueStore));

export default valueStore;