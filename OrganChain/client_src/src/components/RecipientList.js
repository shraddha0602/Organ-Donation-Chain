import React, {Component} from 'react';

class RecipientList extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    
    render () {
        return(
            <li className="collection-item"> Recipient ID : {this.state.item.adharID} <br />Name : {this.state.item.firstName + " " + this.state.item.lastName}</li>
        )
    }
}

export default RecipientList;