import React, {Component} from 'react';

class DonorList extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }

    render () {
        return(
            <li className="collection-item" onClick={this.function = () => {
                console.log("clicked : " + this.state.item.adharID);
            }}> Donor ID : {this.state.item.adharID} <br />Name : {this.state.item.firstName + " " + this.state.item.lastName}</li>
        )
    }
}

export default DonorList;