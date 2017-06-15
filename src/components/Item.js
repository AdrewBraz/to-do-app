import React from 'react';

export default class Item extends React.Component{
    constructor(props){
        super()
    }
    
    render(){
        const { text, id } = this.props
        return(
            <tr>
                <td>{ id }</td>
                <td>{ text }</td>
                <td>Action</td>
            </tr>
        )
    }
}