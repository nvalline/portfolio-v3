import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './layout/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/my-work" component={Work} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
