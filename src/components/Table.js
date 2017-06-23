import React from 'react';

export default class Table extends React.Component{
    constructor(props){
        super()
    }
    
    handleDelete(e){
        e.preventDefault;
        this.props.deleteAllItems();
    }

    render(){
        if(this.props.item.length === 0){
            return null
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="table-responsive col-xs-12 todo">
                          <table className="table table-striped"> 
                              <thead>
                                  <tr>
                                      <th colSpan="8">Item</th>
                                      <th colSpan="2">Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {this.props.item}
                              </tbody>
                              <button onClick={this.handleDelete.bind(this)} className="btn btn-default">Delete All</button>
                          </table>
                    </div>
                </div>
            </div>
        )
    }
}