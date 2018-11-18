import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import logo from '../IMG_1039.PNG';
import pic from '../openBox-512.png';

class Map extends Component {

  state = {
    viewport: {
      width: 1300,
      height: 600,
      latitude: 35.9940,
      longitude: -78.8986,
      zoom: 10
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken="pk.eyJ1IjoibGl2c2VpYmVydCIsImEiOiJjam9seXMyd3kwcm5oM3Fsc2ZrY2hmMHpsIn0.mLpNtHAeDGdxUKw9H4OWPw"
        >
        <Marker latitude={36.0014} longitude={-78.9382} offsetLeft={-20} offsetTop={-10}>
          <img src={pic} alt="logo" height={30}/>
        </Marker>
        <Marker latitude={36.0104} longitude={-78.218} offsetLeft={-20} offsetTop={-10}>
          <img src={pic} alt="logo" height={30}/>
        </Marker>
        <Marker latitude={36.0443} longitude={-78.603} offsetLeft={-20} offsetTop={-10}>
          <img src={pic} alt="logo" height={30}/>
        </Marker>
        <Marker latitude={36.08347} longitude={-79.0136} offsetLeft={-20} offsetTop={-10}>
          <img src={pic} alt="logo" height={30}/>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default Map;
