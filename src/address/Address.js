import React, { Component } from 'react';


class Address extends Component {

  render() {
    return (<div>
        <p>{this.props.location.address}</p>
        <p>{this.props.location.city},{this.props.location.state}&nbsp;{this.props.location.postalCode}</p>
      </div>
    );
  }
}

export default Address;