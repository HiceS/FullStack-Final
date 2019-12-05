import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import './../sass/item.scss';
import { Button, Form } from 'react-bootstrap';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    state = {
        valid: false
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

    submitForm(e) {
        e.preventDefault();
        this.submit(e);
    }

    render() {
        
        return (
                <Form onSubmit={ (e) => this.submitForm(e) }>
                    <div className="checkout">
                        <Form.Group controlId="formPlaintextEmail">
                            <Form.Label>
                            Purchasing 1 {this.props.location.state.item.name} for ${this.props.location.state.item.price}.00
                            </Form.Label>
                        </Form.Group>

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

                        <Form.Group>
                            <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            />
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