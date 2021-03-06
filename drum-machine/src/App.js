import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DrumRack from './components/DrumRack/DrumRack';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-Drum-Machine</h1>
        </header>
        <p className="App-intro">
          To get started, press some keys.
        </p>
        <DrumRack />
      </div>
    );
  }
}

export default App;
