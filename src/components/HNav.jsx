import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

// After hours of messing with this I have deemed it ridiculous to deal with routing and gh-pages so no routing internally
function HNav () {
    return(
        <Navbar className="header-container" fixed="top" expand="lg" variant="dark" bg="dark">
            <Navbar.Brand>Shawn Hice</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://github.com/HiceS">Github</Nav.Link>
                    <Nav.Link href="mailto:shice@pdx.edu">Email</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HNav;