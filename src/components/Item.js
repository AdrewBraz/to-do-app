import React from 'react';

export default class Item extends React.Component{
    constructor(props){
        super()
    }
    
    handleDelete(e){
        const { id, deleteItem } = this.props
        e.preventDefault();
        deleteItem(id)
    }

    render(){
        const { text} = this.props
        return(
            <tr>
                <td colSpan="8">{ text }</td>
                <td>
                    <button onClick={this.handleDelete.bind(this)} className="btn btn-danger" value="delete"> delete</button>
                </td>
            </tr>
        )
    }
}