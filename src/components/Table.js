import React from 'react';

export default class Table extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        if(this.props.item.size === 0){
            return null
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="table-responsive col-xs-12">
                          <table className="table table-striped"> 
                              <caption>ToDo List</caption>
                              <thead>
                                  <tr>
                                      <th>№</th>
                                      <th>Item</th>
                                      <th>Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {this.props.item}
                              </tbody>
                          </table>
                    </div>
                </div>
            </div>
        )
    }
}