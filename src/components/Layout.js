import React from 'react';
import ToDoStore from '../stores/ToDostore';
import Header from './Header';
import Table from './Table';
import Form from './Form';
import Item from './Item';

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
           todos: ToDoStore.getAllToDos()
        }
    }

    componentWillMount() {
        ToDoStore.on('change', () =>{
            this.setState({
                todos: ToDoStore.getAllToDos()
            })
        })
    }

    render(){
        const {todos} = this.state;
        const itemCompontent = todos.map((todo) => {
            return <Item key = {todo.id} {...todo}/>
        });

        return(
            <div>
                <Header/>
                <Form/>
                <Table item = {itemCompontent}/>
            </div>
        )
    }
}