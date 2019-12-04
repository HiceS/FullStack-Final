import React from 'react';
import { connect } from 'react-redux';
import '../sass/Component.scss';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class HCats extends React.Component {
    componentDidMount(){
        // grab the database stuff
        // use async and .then()
        // #29
        // add items to the state
        // get iterms in render
    }
    // This will make a list of cards that act as buttons to change the route to a specific category:id which will give a similiar page with HItems 
    // eventhandler.bind seems to have a bug so I won't be using it
    render(){
        const categories = this.props.categories;
        const categoriesList = categories.length ? (
            categories.map(category => {
                return(
                    <Row key={category.id}>
                        <Link to={{
                            pathname: '/category/' + category.name,
                            state: {
                                category: category
                            }}}>
                            <div className="category">
                                <button onClick={ () => {
                                    console.log("Selected: " + category);
                                }}>
                                <img  className="screen-center" alt="" src={category.photo}></img>
                                <div className="text screen-center" >{category.name}</div>
                                </button>
                            </div>
                        </Link>
                    </Row>
                )
            })
        ) : (
            <div>No data is loaded yet</div>
        )
        return (
            <div className="component screen-center">
                <Container>
                    {categoriesList}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //let id = ownProps.match.params.cat_name;
    return {
        categories: state.project.categories
    }
}

export default connect(mapStateToProps)(HCats);