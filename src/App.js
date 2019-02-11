import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/FooterComponent';
import RestaurantDetails from "./restaurant-details/RestaurantDetails";
import Home from "./home/Home";
import './App.scss';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants/:name" component={RestaurantDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
