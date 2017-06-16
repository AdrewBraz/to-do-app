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
            id,
            text
        });
        this.emit('change');
    }

    deleteItem(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        Counter.decrement()
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
            // case "DELEATE_ALL":{

            // }
        }
    }
  
}

const todoStore = new ToDoStore;
dispatcher.register(todoStore.actionsHandler.bind(todoStore));

export default todoStore;