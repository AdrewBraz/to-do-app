import React from 'react';

export default class Form extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="form-inline col-xs-12">
                          <div className="form-group">
                              <label className="sr-only" for="inputToDo">Email address</label>
                              <input type="text" className="form-control" id="inputToDo" placeholder="text"/>
                          </div>
                          <button type="submit" className="btn btn-default">Add ToDo</button>
                    </div>
                </div>
            </div>
        )
    }
}