import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {
            "username": "",
            "email": ""
            }
        }

    addUser(newUser) {
        axios.request({
            method:'post',
            url:'http://localhost:3000/api/Users',
            data: newUser
          }).then(response => {
            this.props.history.push('/');
          }).catch(err => console.log(err));
    }

    onSubmit(e){

        const newUser = {
            username: this.refs.username.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        this.addUser(newUser);
        e.preventDefault();
    }

    render() {
        return (
            <div>
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
                    <br /><input type="submit" value="Register" className="btn" />
                </form>
            </div>
        )
    }
}

export default Register;