import { EventEmitter } from 'events';
import dispatcher from "../dispatcher";
import Counter from '../Counter'

class ToDoStore extends EventEmitter{
  constructor(){
    super();
    this.todos = [    
    ];
  }
    getAllToDos() { 
        return this.todos;
    };
  
    createItem(text) {
        const id = Counter.increment();
        this.todos.push({
            text,
            id
        });
        this.emit('change');
    }

    deleteItem(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.emit("change");
    }

    deleteAllItems(){
        this.todos = [];
        this.emit("change");
    }

    actionsHandler(action){
        switch(action.type){
            case "CREATE_ITEM":{
                if(!action.text){
                    return this.todos;
                }
                this.createItem(action.text);
                break;
            }
            case "DELETE_ITEM":{
                this.deleteItem(action.id);
                break;    
            }
            case "DELEATE_ALL":{
                this.deleteAllItems();
                break;
            }
        }
    }
  
}

const todoStore = new ToDoStore;
dispatcher.register(todoStore.actionsHandler.bind(todoStore));

export default todoStore;