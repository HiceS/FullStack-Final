import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { StripeProvider, Elements } from 'react-stripe-elements';
import HNav from './components/HNav';
import HFooter from './components/HFooter';
import HCats from './components/HCats';
import HItems from './components/HItems';
import HItem from './components/HItem';
import PaymentForm from './components/PaymentForm';

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


// it's okay to publish the public test-key, the private key will be stored on the secondary server.
function App() {
  return (
    <BrowserRouter>
      <StripeProvider apiKey="pk_test_z3bOiiGJzZPX9UdDuULmZqb0008tuOiMY4">
        <div className="App">
          <HNav />
          <AnimatedSwitch 
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
            <Route exact path='/' component={HCats} />
            <Route path='/categories' component={HCats} />
            <Route path='/category/:category' component={HItems} />
            <Route exact path='/item/:item' component={HItem} />
            
            <Elements>
              <Route exact path='/purchase/:item' component={PaymentForm} />
            </Elements>
          </AnimatedSwitch>
          <HFooter />
        </div>
      </StripeProvider>
    </BrowserRouter>
  );
}

export default App;
