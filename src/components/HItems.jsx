import { Component } from 'react';
import { connect } from 'react-redux';
import '../sass/Component.scss';
import React from 'react';

class HItems extends Component {
    state = {
        items: []
    }

    componentDidMount(){
        let id = this.props.match.params.category;
    }
    // This will be a list of cards representing items that will be able to be clicked on to route the page to a Hitem which will have the ability to add to cart
    // There will also be the ability to add to cart from this page for fast shopping
    render(){
        return (
            <div>
                Hellow
            </div>
        )
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

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (id, quantity) => {
            dispatch({type: 'ADD_CART', id: id, quantity: quantity})
        }
    }
}

export default connect(mapStateToProps)(HItems);