import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Navigation} from './NavHospital'

class Transfer extends Component{

    transfer(obj) {
        axios.request({
            method:'post',
            url:'http://localhost:3000/api/Transferred?access_token='+localStorage.ptspotter_accessToken,
            data: obj
          }).then(response => {
            console.log("done");
          }).catch(err => console.log(err));
    }

    onSubmit(e){
        const obj = {
            "$class": "org.organ.net.Transferred",
            organ: "resource:org.organ.net.Organ#"+this.refs.organ_id.value
        }

         this.transfer(obj);      
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
                        <input type="text" name="organ_id" ref="organ_id"/>
                        <label htmlFor="organ_id">Organ ID</label>
                    </div>

                    <br /><input type="submit" value="Invoke Transaction" className="btn" />
                </form>
           </div>
            </div>
        )
    }
}

export default Transfer;