import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { GOOGLE_API_KEY } from "../constants";

class GoogleMap extends Component {

  render() {
    return (<Map zoom={14}
                 google={this.props.google}
                 style={{height: '100%', width: '100%'}}
                 initialCenter={this.props.location}>
        <Marker position={this.props.location} title={this.props.name} name={this.props.name}/>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(GoogleMap);
