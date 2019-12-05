import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './../assets/robotic.svg';

function HNav () {
    return(
        <Navbar className="header-container" fixed="top" expand="lg" variant="dark" bg="dark">
            <Navbar.Brand>
                <img
                    alt=""
                    src={Logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}
                  Harnec
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to={{
                            pathname: '/categories/'}}>
                        <Nav.Link href="/categories">Home</Nav.Link>
                    </Link>
                    <Nav.Link href="">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HNav;