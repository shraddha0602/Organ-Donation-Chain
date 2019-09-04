import React, {Component} from 'react';

class HospitalList extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    render () {
        return(
            <li className="collection-item" onClick={this.function = () => {
                this.setState(this.key);
                localStorage.setItem("hospitalId", this.state.item.hospitalId);  
                console.log("ID : " + localStorage.getItem("hospitalId"));
            }}>Name : {this.state.item.name} <br /> ID : {this.state.item.hospitalId}</li>
        )
    }
}

export default HospitalList;