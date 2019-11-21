import React from 'react';
import HNav from './components/HNav';
import HFooter from './components/HFooter';
import { Container, Row, Jumbotron, Col, Card } from 'react-bootstrap';
import './sass/App.scss';

// After hours of messing with this I have deemed it ridiculous to deal with routing and gh-pages so no routing internally
function App() {
  return (
    <div className="App">
      <HNav />
      <HFooter />
    </div>
  );
}

export default App;
