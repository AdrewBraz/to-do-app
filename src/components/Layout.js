import React from 'react';

import Header from './Header';
import Table from './Table';
import Form from './Form';
import Item from './Item';

import ToDoStore from '../stores/ToDostore';
import * as ToDoActions from '../actions/ToDoActions';

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
           todos: ToDoStore.getAllToDos(),
        }
    }

    componentWillMount() {
        ToDoStore.on('change', () =>{
            this.setState({
                todos: ToDoStore.getAllToDos()
            })
        })
    }

    getText(value){
        this.setState({value})
    }

    createItem(){
        ToDoActions.createItem(this.state.value)
    }

    deleteItem(id){
        ToDoActions.deleteItem(id)
    }

    render(){
        const {todos} = this.state;
        const itemCompontent = todos.map((todo) => {
            return <Item deleteItem={this.deleteItem.bind(this)} key = {todo.id} {...todo}/>
        });

        return(
            <div>
                <Header/>
                <Form  getText = {this.getText.bind(this)} createItem = {this.createItem.bind(this)} />
                <Table item = {itemCompontent}/>
            </div>
        )
    }
}