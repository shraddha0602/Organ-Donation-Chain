import React, {Component} from 'react';

class HistorianList extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }

    render () {
        return(
            <li className="collection-item"> 
           $class : {this.state.item.$class} <br />
           transactionId : {this.state.item.transactionId} <br />
           transactionType : {this.state.item.transactionType} <br />
           transactionInvoked : {this.state.item.transactionInvoked} <br />
           identityUsed : {this.state.item.identityUsed} <br />
           eventsEmitted : {this.state.item.eventsEmitted} <br />
           transactionTimestamp : {this.state.item.transactionTimestamp}

           <hr />
            </li>
        )
    }
}

export default HistorianList;