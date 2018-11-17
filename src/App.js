import React, { Component } from 'react';
import logo from './IMG_1039.PNG';
import './App.css';
import Map from './components/Map.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" height={30}/>
        </header>
        <Map/>
      </div>
    );
  }
}
export default App;
