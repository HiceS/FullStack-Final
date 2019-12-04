import React from 'react';
import { connect } from 'react-redux';

class HItem extends React.Component {
    render(){
        return (
            <div>
                item
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    //let id = ownProps.match.params.cat_name;
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (id, quantity) => {
            dispatch({type: 'ADD_CART', id: id, quantity: quantity})
        }
    }
}

export default connect(mapDispatchToProps)(HItem);