import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import './../sass/item.scss';
import { Container, Image, Row, Col, ButtonToolbar, Button, Form } from 'react-bootstrap';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        let { token } = await this.props.stripe.createToken({ name: "Name" });
        let response = await fetch("/charge", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: token.id
        });

        if (response.ok) console.log("Purchase Complete!"); // set state of a completed purcahse or redirect possibly
    }

    render() {
        return (
                <Form>
                    <div className="checkout">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="form-input" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formCardInfo">
                            <Form.Label>Card Information</Form.Label>
                            <CardElement />
                            <Form.Text className="text-muted">
                            We will not store your card information.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
        );
    }
}

export default injectStripe(CheckoutForm);