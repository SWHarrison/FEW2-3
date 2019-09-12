import React from 'react';
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import ProductsAll from './ProductsAll'
import PageAbout from './PageAbout'
import PageContact from './PageContact'
import ProductDetail from './ProductDetail'

import data from './data'

function App() {
  return (
    <Router>
      <div className="App" style={{width:'960px', margin: 'auto'}}>
        <Header />

        <Route path="/" exact component={ProductsAll} />
        <Route path="/about" component={PageAbout} />
        <Route path="/contact" component={PageContact} />

        <Route path="/product-detail" component={ProductDetail} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
