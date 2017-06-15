import { EventEmitter } from 'events';

class ToDoStore extends EventEmitter{
  constructor(){
    super();
    this.todos = [    
    ];
  }
    getAllToDos() { 
        return this.todos;
    };

    makeCounter(){
        let count = 1;
        return count++
    }
  
    createItem(text) {
        const counter = this.makeCounter();
        const id = counter;
        this.todos.push({
            id,
            text
        });
        this.emit('change');
    }
  
}

const todoStore = new ToDoStore;
window.todoStore = todoStore;
export default todoStore;