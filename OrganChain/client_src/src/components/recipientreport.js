import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Navigation} from './NavHospital'

class RecipientReport extends Component{

    state = { selectedFile: null }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
      }

    updateRecipient(updateRecipient) {
        axios.request({
            method:'post',
            url:'http://localhost:3000/api/recipientReportPrepared?access_token='+localStorage.ptspotter_accessToken,
            data: updateRecipient
          }).then(response => {
            console.log("done");
          }).catch(err => console.log(err));
    }

    onSubmit(e){
        const updateRecipient = {
            "$class": "org.organ.net.recipientReportPrepared",
            hash: btoa(this.state.selectedFile),
            recipient: "resource:org.organ.net.Recipient#"+this.refs.Recipient_id.value
        }

         this.updateRecipient(updateRecipient);      
         this.refs.Recipient_id.value="";
            e.preventDefault();
    }

    render() {
        return (
            <div>
            <div className="Nav">
               <Navigation/>
               </div>
               <div className="inlogin">
                <form onSubmit={this.onSubmit.bind(this)} action="#">
                    <div className="input-field">
                        <input type="text" name="Recipient_id" ref="Recipient_id"/>
                        <label htmlFor="Recipient_id">Recipient ID</label>
                    </div>

                    <div style={{textAlign:"left"}}>
                    <input type="file" onChange={this.fileChangedHandler} />
                    </div>

                    <br /> <div style={{marginTop: "50px" }}><input type="submit" value="Invoke Transaction" className="btn" /></div>
                </form>
             </div>
            </div>
        )
    }
}

export default RecipientReport;