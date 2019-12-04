import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import Logo from './../assets/robotic.png';

function HNav () {
    return(
        <Navbar className="header-container" fixed="top" expand="lg" variant="dark" bg="dark">
            <Navbar.Brand>
                <img
                    alt=""
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                  Harnec
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HNav;