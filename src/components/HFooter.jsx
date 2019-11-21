import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

class HFooter extends React.Component {
    render() {
        return (
            <Container className="footer-container">
                <Navbar expand="lg" variant="dark" bg="dark" sticky="bottom">
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Created with <span role="img" aria-label="Purple Heart">💜</span> by Shawn Hice 
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default HFooter;