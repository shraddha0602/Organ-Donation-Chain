import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Navigation} from './NavHospital';
import image2base64 from 'image-to-base64';

class organTestedReport extends Component{

    state = { selectedFile: null }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
      }

    updateOrgan(updateOrgan) {
      axios.request({
          method:'post',
          url:'http://localhost:3000/api/organTestedReportPrepared?access_token='+localStorage.ptspotter_accessToken,
          data: updateOrgan
        }).then(response => {
          console.log("done");
        }).catch(err => console.log(err));
  }

    getOrgan(){
      axios.get('http://localhost:3000/api/Organ?Organ_findById='+this.refs.organ_id.value)
        .then(response => {
          response.Tested.value=true;
          response.testTime.value=new Date().now();
          this.updateOrgantime(response);
      })
      .catch(err => console.log(err));
    }

    updateOrgantime(organDetails) {
      axios.request({
          method:'put',
          url:'http://localhost:3000/api/Organ?Organ_replaceById='+this.refs.organ_id.value,
          data: organDetails
        }).then(response => {
          console.log("done");
        }).catch(err => console.log(err));
  }

    onSubmit(e){
        const updateOrgan = {
            "$class": "org.organ.net.organTestedReportPrepared",
            hash: btoa(this.state.selectedFile),
            organ: "resource:org.organ.net.Organ#"+this.refs.organ_id.value,
            donor: "resource:org.organ.net.Donor#"+this.refs.donor_id.value
        }

        this.updateOrgan(updateOrgan);  
       // this.getOrgan();     
        this.refs.donor_id.value="";
        this.refs.organ_id.value="";
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
                        <input type="text" name="donor_id" ref="donor_id"/>
                        <label htmlFor="donor_id">Donor ID</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="organ_id" ref="organ_id"/>
                        <label htmlFor="organ_id">Organ ID</label>
                    </div>

                    <div style={{textAlign:"left"}}>
                    <input type="file" onChange={this.fileChangedHandler.bind(this)} ref="sfile" />
                    </div>

                    <br /><input type="submit" value="Invoke Transaction" className="btn"/>
                </form>
              </div>
            </div>
        )
    }
}

export default organTestedReport;