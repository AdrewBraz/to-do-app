import React from 'react';

export default class Header extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="page-header col-xs-12">
                          <h1 className="center-block">ToDo List</h1>
                    </div>
                </div>
            </div>
        )
    }
}