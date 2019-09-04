import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return (
            <Navbar collapseOnSelect bg="light" variant="light" fixed="top">
                 <a class="navbar-brand" href="#"><img src="https://i.ibb.co/W0SgvbZ/Screenshot-from-2019-08-25-18-59-42.png" width="60" height="60" /></a>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="justify-content-end" style={{ width: "100%"}}>
            <Nav.Link href="#">Ledger</Nav.Link>
                <Nav.Link  onClick={this.function = () => {
localStorage.ptspotter_accessToken = null;
localStorage.ptspotter_userId = null;
//localStorage.clear();
window.location.href = '/login';
console.log( "access Token : " + localStorage.ptspotter_accessToken +"\n UserId : " + 
localStorage.ptspotter_userId );
}}>Logout</Nav.Link>
            </Nav>

            </Navbar.Collapse>
          </Navbar>
        );
    }
}