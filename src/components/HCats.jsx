import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import '../sass/Component.scss';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class HCats extends Component {
    state = {
        loading: true,
        project: {}
    }
    componentDidMount(){
        // grab the database stuff
        // use async and .then()
        // #29
        // add items to the state
        // get iterms in render
        fetch('https://raw.githubusercontent.com/HiceS/FullStack-Final/master/src/dataSample.json')
            .then(response => response.json())
            .then(data => this.setState({ loading: false, project: data }));
    }
    // This will make a list of cards that act as buttons to change the route to a specific category:id which will give a similiar page with HItems 
    // eventhandler.bind seems to have a bug so I won't be using it
    renderCats = data => {
        console.log(this.state.project);
        const categories = this.state.project.categories;
        console.log(categories);
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
    };

    render(){
        const { loading, data } = this.state;

        return (
            <Fragment>
                {loading ? "Loading Data " : this.renderCats(data)}
            </Fragment>
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