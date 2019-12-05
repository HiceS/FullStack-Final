import { Component } from 'react';
import { connect } from 'react-redux';
import '../sass/item.scss';
import { Container, Image, Row, Col } from 'react-bootstrap';
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
            <div className="item">
                <Container>
                    {item !== undefined ? (
                        <div className="category">
                            <Row>
                                <div className="text" >
                                    <h1>
                                        {this.props.location.state.item.name}
                                    </h1>
                                </div>
                            </Row>
                            <Row>
                                {this.props.location.state.item.photos.map(photo =>
                                    <Col md>   
                                        <Image
                                        src={photo}
                                        alt={photo}
                                        fluid
                                        rounded
                                        />
                                    </Col> 
                                )}
                            </Row>
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

/**
 * 
 *                                 <Carousel>
                                    {this.props.location.state.item.photos.map(photo =>
                                        <Carousel.Item>
                                                <img
                                                className="d-block w-100"
                                                src={photo}
                                                alt={photo}
                                                />
                                        </Carousel.Item>
                                    )}
                                </Carousel>
 */


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