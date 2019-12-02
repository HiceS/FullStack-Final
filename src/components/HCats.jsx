import React from 'react';
import { connect } from 'react-redux';
import '../sass/Component.scss';

class HCats extends React.Component {
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

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(HCats);