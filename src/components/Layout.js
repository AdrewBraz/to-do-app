import React from 'react';

import Header from './Header';
import Table from './Table';
import Form from './Form';
import Item from './Item';

import ToDoStore from '../stores/ToDostore';
import * as ToDoActions from '../actions/ToDoActions';

import ValueStore from '../stores/Valuestore';
import * as ValueActions from '../actions/ValueActions';

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
           todos: ToDoStore.getAllToDos(),
           value: ValueStore.getValue()
        }
    }

    componentWillMount() {
        ToDoStore.on('change', () =>{
            this.setState({
                todos: ToDoStore.getAllToDos()
            })
        }),
         ValueStore.on('change', () =>{
            this.setState({
               value: ValueStore.getValue()
            })
        })
    }

    changeValue(text){
        ValueActions.changeValue(text)
    }

    cleanValue(){
        ValueActions.cleanValue();
    }

    createItem(){
        ToDoActions.createItem(this.state.value)
    }

    deleteItem(id){
        ToDoActions.deleteItem(id)
    }

    deleteAllItems(){
        ToDoActions.deleateAllItems();
    }

    render(){
        const {todos} = this.state;
        const itemCompontent = todos.map((todo) => {
            return <Item deleteItem={this.deleteItem.bind(this)} key = {todo.id} {...todo}/>
        });

        return(
            <div>
                <Header/>
                <Form cleanValue = {this.cleanValue.bind(this)} changeValue = {this.changeValue.bind(this)} createItem = {this.createItem.bind(this)} />
                <Table deleteAllItems={this.deleteAllItems.bind(this)} item = {itemCompontent}/>
            </div>
        )
    }
}