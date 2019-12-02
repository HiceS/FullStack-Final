import React from 'react';
import { connect } from 'react-redux';
import { refreshCategory } from './../actions/categoryActions';
import '../sass/Component.scss';

class HCart extends React.Component {
    componentDidMount(){
        // grab the database stuff
        // use async and .then()
        // #29
        // add items to the state
        // get iterms in render
    }

    render(){
        const categories = this.props.categories;
        const categoriesList = categories.length ? (
            categories.map(category => {
                return(
                    <div key={category.id}>{category.name}</div>
                )
            })
        ) : (
            <div>No data is loaded yet</div>
        )
       console.log(this.props);
        return (
            <div className="component Emphasis">
                {categoriesList}
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
        refreshCategories: () => {
            dispatch(refreshCategory())
        }
    }
}

export default connect(mapStateToProps)(HCart);