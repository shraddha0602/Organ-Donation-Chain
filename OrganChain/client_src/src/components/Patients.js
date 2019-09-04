import React, {Component} from 'react';
import axios from 'axios';
import DonorList from './DonorList';
import RecipientList from './RecipientList';
import {Navigation} from './NavHospital'

class Patients extends Component{

    constructor(){
        super();
        this.state = {
          donors: [],
          recipients: []
        }
    }

    componentWillMount(){
        this.getDonors();
        this.getRecipients();
    }

    getDonors(){
        let accessToken = localStorage.ptspotter_accessToken;
        axios.get('http://localhost:3000/api/Donor?access_token='+accessToken)
          .then(response => {
            var donorList = [];

            donorList = response.data.filter(function(i) {
                return i.hospital === "resource:org.organ.net.Hospital#"+localStorage.ptspotter_hospitalId;
            });

            this.setState({donors: donorList}, () => {

            })
        })
        .catch(err => console.log(err));
      }

      getRecipients(){
        let accessToken = localStorage.ptspotter_accessToken;
        axios.get('http://localhost:3000/api/Recipient?access_token='+accessToken)
          .then(response => {
            var recipientList = [];

            recipientList = response.data.filter(function(i) {
                return i.hospital === "resource:org.organ.net.Hospital#"+localStorage.ptspotter_hospitalId;
            });

            this.setState({recipients: recipientList}, () => {

            })
        })
        .catch(err => console.log(err));
      }

      


    render() {
        const donorList = this.state.donors.map((donor, i) => {
            return(
              <DonorList key={donor.adharID} item={donor} />
            )
          })

          const recipientList = this.state.recipients.map((recipient, i) => {
            return(
              <RecipientList key={recipient.adharID} item={recipient} />
            )
          })

          return (
            <div>
             <div className="Nav">
 
               <Navigation/>
              </div>
               <div className = "patient">
                  <div className="in">
                       <h4> Donor List</h4>
                        <ul className="collection">
                         {donorList}
                       </ul>
               
                       <h4>Recipient List</h4>
                        <ul className="collection">
                        {recipientList}
                       </ul>
                  </div>
 
                </div>
             </div>
         )
    }
}

export default Patients;