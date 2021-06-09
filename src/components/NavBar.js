import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../images/initial-logo.png';

const NavBar = () => {
    return (
        <Navbar bg="white" variant="light">
            <Navbar.Brand>
                <img 
                    src={logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="Personal Logo"
                />
                Soo-Beom Kim
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar