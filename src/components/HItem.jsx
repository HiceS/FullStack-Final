import { Component } from 'react';
import { connect } from 'react-redux';
import '../sass/Component.scss';
import { Container, Row } from 'react-bootstrap';
import React from 'react';

class HItem extends Component {
    componentDidMount(){
    }
    // This will be a list of cards representing items that will be able to be clicked on to route the page to a Hitem which will have the ability to add to cart
    // There will also be the ability to add to cart from this page for fast shopping
    render(){
        const item = this.props.location.state.item !== undefined ? this.props.location.state.item : undefined;

        console.log(item === undefined);
        
        return (
            <div className="component screen-center">
                <Container>
                    {item !== undefined ? (
                        <div className="category">
                            <button onClick={ () => {
                                console.log("Selected: " + this.props.location.state.item);
                            }}>
                            <img  className="screen-center" alt="" src={this.props.location.state.item.photos[0]}></img>
                            <div className="text screen-center" >{this.props.location.state.item.name}</div>
                            </button>
                        </div>
                    ) : (
                        <div>
                            Could not find the selected category
                        </div>
                    )}
                </Container>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        categories: state.project.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (id, quantity) => {
            dispatch({type: 'ADD_CART', id: id, quantity: quantity})
        }
    }
}

export default connect(mapStateToProps)(HItem);