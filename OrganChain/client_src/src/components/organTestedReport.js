import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Navigation} from './NavHospital';
import image2base64 from 'image-to-base64';

class Patients extends Component{

    state = { selectedFile: null ,
        hashString : ""
    }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
      }

      fileToBase64 = (filename, filepath) => {
        return new Promise(resolve => {
          var file = new File([filename], filepath);
          var reader = new FileReader();
          // Read file content on file loaded event
          reader.onload = function(event) {
            resolve(event.target.result);
          };
          
          // Convert data to base64 
          reader.readAsDataURL(file);
        });
      };

    updateOrgan(updateOrgan) {
        axios.request({
            method:'post',
            url:'http://localhost:3000/api/organTestedReportPrepared?access_token='+localStorage.ptspotter_accessToken,
            data: updateOrgan
          }).then(response => {
            console.log("done");
          }).catch(err => console.log(err));
    }

    onSubmit(e){

        //var hashString = btoa(this.state.selectedFile);
        this.fileToBase64("download.jpeg", "./test.pdf").then((result) => {
            console.log("test : "+result);
          });
        image2base64(this.state.selectedFile).then(
            (response) => {

                const updateOrgan = {
                    "$class": "org.organ.net.organTestedReportPrepared",
                    hash: response,
                    organ: "resource:org.organ.net.Organ#"+this.refs.organ_id.value,
                    donor: "resource:org.organ.net.Donor#"+this.refs.donor_id.value
                }
                    console.log(atob(updateOrgan.hash));
                this.updateOrgan(updateOrgan);   
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )   
            this.refs.donor_id.value="";
            this.refs.organ_id.value="";
            this.state.selectedFile="";
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

export default Patients;