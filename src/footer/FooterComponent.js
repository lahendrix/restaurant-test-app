import React, { Component } from 'react';
import './Footer.scss';

class FooterComponent extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="col-6">
          <div className="lunch-icon" />
        </div>
        <div className="col-6">
          <div className="internet-icon" />
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
