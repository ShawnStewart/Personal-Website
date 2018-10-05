import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";

const MapOverlay = ({ text }) => <div className="Map-Text">{text}</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 27.950575, lng: -82.457176 },
    zoom: 13
  };
  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAcMcukzSUkh4EJbtlgVjtcbE_Hpr4A7ww" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapOverlay
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={"Shawn Stewart"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
