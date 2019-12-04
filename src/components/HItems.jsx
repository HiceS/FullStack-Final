import { Component } from 'react';
import { connect } from 'react-redux';
import '../sass/Component.scss';
import { Container, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

import '../sass/Component.scss';

class HItems extends Component {
    componentDidMount(){
        console.log(this.props.location.state.category);
    }
    
    // This will be a list of cards representing items that will be able to be clicked on to route the page to a Hitem which will have the ability to add to cart
    // There will also be the ability to add to cart from this page for fast shopping
    render(){
        const ItemsList = this.props.location.state.category.items ? (this.props.location.state.category.items.map(item => {
            return (
                <Row key={item.id}>
                    <Link to={{
                        pathname: '/item/' + item.name,
                        state: {
                            item: item
                        }}}>
                        <div className="category">
                            <button onClick={ () => {
                                console.log("Selected: " + item);
                            }}>
                            <img  className="screen-center" alt="" src={item.photos[0]}></img>
                            <div className="text screen-center" >{item.name}</div>
                            </button>
                        </div>
                    </Link>
                </Row>
            )
        })) : (() => {
            return (
                <div>
                    Could not find the selected category
                </div>
            )
        });

        return (
            <div className="component screen-center">
                <Container>
                    {ItemsList}
                </Container>
            </div>
        );
    }
}

/*
               item that will be replaced by nested map function over category items
                {
                    this.items && this.items.map(item => {
                        return (
                            <div>item.name</div>
                        )
                    })
                }
*/

const mapStateToProps = (state) => {
    //let id = ownProps.match.params.cat_name;
    return {
        categories: state.project.items
    }
}

export default connect(mapStateToProps)(HItems);