import React, { Component } from 'react';
import ReactMapGL, {NavigationControl} from 'react-map-gl';
// import ReactMapGL, {Marker} from 'react-map-gl';
import './Map.css'


const TOKEN = 'pk.eyJ1Ijoia2lyYXJhZTIxIiwiYSI6ImNqdDRvMHhlbzAzaDg0YW8wc3N5cWFqNmgifQ.ut1w-lL1kVt41racDTV66A';

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px',
  };

  class Map extends Component {
        state = {
          mapStyle: "mapbox://styles/kirarae21/cjt799cn115r61fqmf9rmezof",
          viewport: {
            latitude: 37.7680,
            longitude: -78.2057,
            zoom: 5.8,
            minZoom: 4.5,
            width: 1200,
            height: 700
          }
        };
      
        _onViewportChange = viewport => this.setState({viewport});

        _onStyleChange = mapStyle => this.setState({mapStyle});
      
  render() {

    const {viewport, mapStyle} = this.state;

    return (
      <div className="map" >
          <ReactMapGL
            {...viewport}
            mapStyle={mapStyle}
            onViewportChange={this._onViewportChange} 
            mapboxApiAccessToken={TOKEN}>
            <div className="nav" style={navStyle}> 
              <NavigationControl
               onViewportChange={this._onViewportChange} />
            </div>
        </ReactMapGL>
        
      </div>
    );
  }
}

export default Map;
