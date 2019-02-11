import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './RestaurantCard.scss';

class RestaurantCard extends Component {
  slugifyName (name) {
    return name.toLowerCase().split(" ").join("-");
  }

  render() {
    const { restaurant } = this.props;
    return (
      <Link to={{pathname: `/restaurants/${this.slugifyName(restaurant.name)}`, state: {restaurant}}}>
      <div className="restaurant-card">
        <div>
          <img src={this.props.restaurant.backgroundImageURL} />
        </div>
        <div className="info-wrapper">
            <h3 className="restaurant-name">{this.props.restaurant.name}</h3>
          <p className="restaurant-category">{this.props.restaurant.category}</p>
        </div>
      </div>
      </Link>
    );
  }
}

export default RestaurantCard;
