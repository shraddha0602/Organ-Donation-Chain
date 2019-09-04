import React, {Component} from 'react';
import axios from 'axios';
import HospitalList from './HospitalList';

class Register extends Component{

    constructor(){
        super();
        this.state = {
          hospitals: []
        }
    }

    componentWillMount(){
        this.getHospitals();
    }

    getHospitals(){
        axios.get('http://localhost:3000/api/Hospital')
          .then(response => {
            this.setState({hospitals: response.data}, () => {
              //console.log(this.state);
            })
        })
        .catch(err => console.log(err));
      }


    render() {
        const hospitalList = this.state.hospitals.map((hospital, i) => {
            return(
              <HospitalList key={hospital.hospitalId} item={hospital} />
            )
          })
        return (
            <div>
                <h1>Register</h1>
                <ul className="collection">
                {hospitalList}
                </ul>
            </div>
        )
    }
}

export default Register;