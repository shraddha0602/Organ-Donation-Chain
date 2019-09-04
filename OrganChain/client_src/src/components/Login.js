import React, {Component} from 'react';
import axios from 'axios';
import {Navigation} from './NavLogin';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            "username": ""
            }
        }

        login(newUser) {
            axios.request({
                method:'post',
                url:'http://localhost:3000/api/Users/login',
                data: newUser
              }).then(response => {
              localStorage.ptspotter_accessToken = response.data.id;
              localStorage.ptspotter_userId = response.data.userId;
              
              if(newUser.username.includes("HOSPITAL")){
                localStorage.ptspotter_hospitalId = newUser.username;
                this.props.history.push('/patients');
              }
              else if(newUser.username.includes("DONOR")){
                localStorage.ptspotter_donorId = newUser.username;
                this.props.history.push('/donorhome');
              }
             else if(newUser.username.includes("RECIPIENT")){
                localStorage.ptspotter_recipientId = newUser.username;
                this.props.history.push('./recipienthome');
             }
              }).catch(err => console.log(err));
        }

    onSubmit(e){

        const newUser = {
            username: this.refs.username.value,
            password: this.refs.password.value,
            email: this.refs.email.value
        }
        this.login(newUser);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <div className = "Nav">
                <Navigation/>
               </div>
               
           

             <div className="inlogin">
                
                <form onSubmit={this.onSubmit.bind(this)} action="#">
                    <div className="input-field">
                        <input type="text" name="username" ref="username" />
                        <label htmlFor="username">UserName</label>
                    </div>
                    <div className="input-field">
                        <input type="email" name="email" ref="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name="password" ref="password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <br /><input type="submit" value="Login" className="btn" />
                </form>
            </div>
            </div>
        
        )
    }
}

export default Login;