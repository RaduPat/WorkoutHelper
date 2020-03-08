import React, { Component } from "react";
import { Navbar, Nav} from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/Schedule">Schedule</Nav.Link>
            <Nav.Link href="/Workout">Record Workout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}



export default NavBar;