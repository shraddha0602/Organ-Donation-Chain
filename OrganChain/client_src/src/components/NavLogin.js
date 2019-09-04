import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';


export class Navigation extends Component{
    render(){
        return (
            <Navbar collapseOnSelect bg="light" variant="light" fixed="top">
                 <a class="navbar-brand" href="#"><img src="https://i.ibb.co/W0SgvbZ/Screenshot-from-2019-08-25-18-59-42.png" width="60" height="60" /></a>
               <Navbar.Brand href="/">Home</Navbar.Brand>
            </Navbar>
        );
    }
}