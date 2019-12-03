import React from 'react';
import { connect } from 'react-redux';
import '../sass/Component.scss';

const HItems = ({items}) => {
    // This will be a list of cards representing items that will be able to be clicked on to route the page to a Hitem which will have the ability to add to cart
    // There will also be the ability to add to cart from this page for fast shopping
    return (
        <div>
            item that will be replaced by nested map function over category items
            {
                items && items.map(item => {
                    return (
                        <div>item.name</div>
                    )
                })
            }
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    //let id = ownProps.match.params.cat_name;
    return {
        categories: state.project.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (id) => {
            dispatch({type: 'ADD_CART', id: id, quantity: quantity})
        }
    }
}

export default connect(mapDispatchToProps)(HItems);