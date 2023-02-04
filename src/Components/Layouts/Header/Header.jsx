// import React from 'react';

//CSS Link
import './Header.css';

// bootstrap main import link
import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap components links
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//assests links
import logo from '../../../assest/images/Text-FootOScope-logo.png';
import { Container } from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg="light" expand="lg">

        <Navbar.Brand href="#home">
          <img style={{width:'12rem'}} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blogs</Nav.Link>
            <Nav.Link href="#link">Videos</Nav.Link>
            <Nav.Link href="#link">Photos</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}

export default Header;