import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HNav from './components/HNav';
import HFooter from './components/HFooter';
import HCats from './components/HCats';

import './sass/App.scss';

// After hours of messing with this I have deemed it ridiculous to deal with routing and gh-pages so no routing internally

/**
 * This app is for generating stores based off database information
 * This will consist of a:
 *  - navbar with company info and general links to home page
 *    - cart component with cart being ip based
 *      - cart id which is a unique identifier for combination of objects
 *        - probably just item id hashed and then combined somehow reversibly 
 *  - footer with copyright and legal information
 *  - body object for parsing info
 *    - body object for that body object for each level of data in json
 *      - example products (list) -> racing products (list) -> BMW racing products (list) -> intake (item)
 *  - item object with associated price and stripe ID for payment
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HNav />
        <HCats />
        <HFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
