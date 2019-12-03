import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import './sass/hicestrap.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootreducer from './reducers/rootreducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

// create many reducers and combine reducers to pass into store
// a reducer for checkout
// a reducer for interaction etc...
// never edit the state
const store = createStore(rootreducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    )
);

//https://www.youtube.com/watch?v=JA1Z0u4dr0E&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=18

// After hours of messing with this I have deemed it ridiculous to deal with routing and gh-pages so no routing internally
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
