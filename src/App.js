import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';


class App extends Component {
  state = {
    cards: []
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Strikes Back!</h1>
        </header>
        <div>
          <Card name="Front" />
            <Card name="Back" />
        </div>
      </div>
    );
  }
}

export default App;
