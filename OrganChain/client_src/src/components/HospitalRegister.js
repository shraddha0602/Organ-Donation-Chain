import React, {Component} from 'react';
import axios from 'axios';
import {Navigation} from './Navbar'

class HospitalRegister extends Component{

    constructor(props) {
        super(props);
        this.state = {
            "organName": {
                'EYE': false,
                'KIDNEY': false,
                'HEART': false,
                'LUNGS': false,
                'TISSUE': false
            }
        }
        //this.hospital_id = this.generateRandomID();
    }

    /*generateRandomID(){
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let date2 = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let randomDigit = Math.floor(Math.random() * 10);
        let newDate = "HOSPITAL" + year.toString()+month.toString() + date2.toString() + hour.toString()+minute.toString()+second.toString() + randomDigit;
        return newDate;
    }*/

    addHospital(newHospital) {
        axios.request({
            method:'post',
            url:'http://localhost:3000/api/hospitalRegister',
            data: newHospital
          }).then(response => {

          }).catch(err => console.log(err));
    }

    addUser(newUser) {
        axios.request({
            method:'post',
            url:'http://localhost:3000/api/Users',
            data: newUser
          }).then(response => {
            this.props.history.push('/login');
            console.log("ID : "+ this.props.match.params.hospital_id);
          }).catch(err => console.log(err));
    }

    onSubmit(e){
        var JSONObject = this.state.organName;
        const selectedOrgan = Object.keys(JSONObject);
        const arr=[];
        var i=0;
    
        Object.values(JSONObject).forEach(function(value) {
            if(value===true){
                arr.push(selectedOrgan[i]);
            }
            ++i;
        });

        const newHospital = {
            "$class":"org.organ.net.hospitalRegister",
            hospitalId: "HOSPITAL"+this.refs.hospital_id.value,
            name: this.refs.name.value,
            email: this.refs.email.value,
            address: this.refs.address.value,
            organName: arr
        }

        const newUser = {
            username: "HOSPITAL"+this.refs.hospital_id.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        this.addHospital(newHospital);
        this.addUser(newUser);        
        e.preventDefault();
    }

    onOrganChange(e) {
        const val = e.target.checked;
        const name = e.target.name;
        let updated = Object.assign({},this.state.organName, {[name]:val})
        this.setState({
            organName: updated
        })
    }

    render() {
        return (
            <div>
            <div className="Nav">
               <Navigation/>
                </div>
                
                <div className="register-box">
               

               <form onSubmit={this.onSubmit.bind(this)} action="#">
                   <div className="input-field">
                       <input type="text" name="hospital_id" ref="hospital_id"/>
                       <label htmlFor="hospital_id">Hospital ID</label>
                   </div>
                   <div className="input-field">
                       <input type="text" name="name" ref="name" />
                       <label htmlFor="name">Hospital Name</label>
                   </div>
                   <div className="input-field">
                       <input type="email" name="email" ref="email" />
                       <label htmlFor="email">Email</label>
                   </div>
                   <div className="input-field">
                       <input type="text" name="contact" ref="contact" />
                       <label htmlFor="contact">Contact</label>
                   </div>
                   <div className="input-field">
                       <input type="password" name="password" ref="password" />
                       <label htmlFor="password">Password</label>
                   </div>
                   <div className="input-field">
                       <input type="text" name="address" ref="address" />
                       <label htmlFor="address">Address</label>
                   </div>
                   
                   
                       <label>
                           <input type="checkbox" name="EYE" 
                           checked={this.state.organName['EYE']}
                           onChange={this.onOrganChange.bind(this)}/>
                           <span>EYE &nbsp;</span>
                       </label><br />
                       <label>
                           <input type="checkbox" name="KIDNEY"
                           onChange={this.onOrganChange.bind(this)}
                           value={this.state.organName['KIDNEY']}/>
                           <span>KIDNEY</span>
                       </label><br />
                       <label>
                           <input type="checkbox" name="HEART" 
                           onChange={this.onOrganChange.bind(this)}
                           value={this.state.organName['HEART']}/>
                           <span>HEART</span>
                       </label><br />
                       <label>
                           <input type="checkbox" name="LUNGS"
                           onChange={this.onOrganChange.bind(this)}
                           value={this.state.organName['LUNGS']}/>
                           <span>LUNGS</span>
                       </label><br />
                       <label>
                           <input type="checkbox" name="TISSUE"
                           onChange={this.onOrganChange.bind(this)}
                           value={this.state.organName['TISSUE']}/>
                           <span>TISSUE</span>
                       </label><br />

                   
                   <br /><input type="submit" value="Register" className="btn" />
               </form>
               
       
           </div>
            </div>
        )
    }
}

export default HospitalRegister;