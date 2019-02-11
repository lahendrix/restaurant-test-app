import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  constructor () {
    super();
    this.state = {
      restaurant: {}
    };
  }


  render() {
    return (
      <header className="Header">
        <div className="col-2">
          <Link to={{pathname: `/`}}>
            <i className="fa fa-chevron-left" />
          </Link>
        </div>
        <div className="col-8">
          <span>
            Lunch Tyme
          </span>
        </div>
        <div className="col-2">
          <div className="map-icon" />
        </div>
      </header>
    );
  }
}

export default Header;
