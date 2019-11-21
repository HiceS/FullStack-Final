import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import './sass/hicestrap.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// After hours of messing with this I have deemed it ridiculous to deal with routing and gh-pages so no routing internally
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
