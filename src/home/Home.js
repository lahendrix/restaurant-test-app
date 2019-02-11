import React, { Component } from 'react';
import RestaurantCard from "../restaurant-card/RestaurantCard";
import axios from 'axios';
import HeaderComponent from "../header/Header";
import { RESTAURANT_API_URL } from "../constants";

class Home extends Component {

  constructor () {
    super();
    this.state = {
      restaurants: []
    };
  }

  componentDidMount () {
    this.getRestuarants();
  }

  getRestuarants () {
    axios.get(RESTAURANT_API_URL)
      .then(response => this.setState({restaurants: response.data.restaurants}));
  }

  renderRestaurantCard (restaurant) {
    return <RestaurantCard restaurant={restaurant} />
  }

  render() {
    return ([
      <HeaderComponent/>,
      <div className="home">
        {this.state.restaurants.map(this.renderRestaurantCard)}
      </div>
    ])
  }
}

export default Home;
