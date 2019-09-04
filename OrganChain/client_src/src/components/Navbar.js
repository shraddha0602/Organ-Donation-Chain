import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return (
            <Navbar collapseOnSelect bg="light" variant="light" >
                

             <a class="navbar-brand" href="#"><img src="https://i.ibb.co/W0SgvbZ/Screenshot-from-2019-08-25-18-59-42.png" width="60" height="60" /></a>


            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
               
            <Nav className="justify-content-end" style={{ width: "100%"}}>
                
                 <NavDropdown title="Register" id="collasible-nav-dropdown">
                 <NavDropdown.Item href="/hospitalregister">Hospital</NavDropdown.Item>
                 <NavDropdown.Item href="/DonorRegister">Donor</NavDropdown.Item>
                 <NavDropdown.Item href="/Recipientregister">Recipient</NavDropdown.Item>
                 </NavDropdown>

                <Nav.Link href="/login"><bold>Login</bold></Nav.Link>
            </Nav>

            </Navbar.Collapse>
          </Navbar>
          
        );
    }
}