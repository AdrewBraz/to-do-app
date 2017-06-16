import React from 'react';

export default class Form extends React.Component{
    constructor(props){
        super()
    }

    handleChange(e){
        let value = this.newItem.value;
        this.props.getText(value);
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.createItem();
        this.form.reset()
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <form ref= {input => this.form = input} className="form-inline col-xs-12">
                          <div className="form-group">
                              <label className="sr-only" for="inputToDo">Email address</label>
                              <input ref= {input => this.newItem = input} onChange= {this.handleChange.bind(this)} type="text" className="form-control" id="inputToDo" placeholder="text"/>
                          </div>
                          <button onClick= {this.handleSubmit.bind(this)} type="submit" className="btn btn-default">Add ToDo</button>
                    </form>
                </div>
            </div>
        )
    }
}