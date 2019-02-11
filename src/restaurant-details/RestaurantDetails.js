import React, { Component } from 'react';

import './RestaurantDetails.scss';
import HeaderComponent from "../header/Header";
import GoogleMap from '../google-map/GoogleMap';
import Address from "../address/Address";
import FooterComponent from "../footer/FooterComponent";

class RestaurantDetails extends Component {
  renderAddress() {

  }

  render() {
    const { restaurant } = this.props.location.state;
    return (
      <div className="restaurant-details">
        <HeaderComponent />
        <div className="map-wrapper">
          <GoogleMap location={restaurant.location} name={restaurant.name}/>
        </div>
        <div className="name-wrapper">
          <h3>{restaurant.name}</h3>
          <p>{restaurant.category}</p>
        </div>
        <div className="info-wrapper">
          <Address location={restaurant.location} />
          <p>{restaurant.contact? restaurant.contact.formattedPhone : 'No phone listed.'}</p>
          <p>@{restaurant.contact? restaurant.contact.twitter : 'No twitter account listed.'}</p>
        </div>
        <FooterComponent/>
      </div>
    );
  }
}

export default RestaurantDetails;
