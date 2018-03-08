import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';


class App extends Component {
  state = {
    cards: [
      { front: 'Blah', back: 'Halb', show: true },
      { front: 'What', back: 'Tahw', show: true },
      { front: 'Please', back: 'Esaelp', show: true },
      { front: 'Work', back: 'Krow', show: true },
    ]
  }

  toggleShowCard = () => {
    this.setState( state => {
      return { showCard: !state.showCard}
    });
  }


  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Strikes Back!</h1>
        </header>
        <div>
          <Card name="first" />
        </div>
      </div>
    );
  }
}

export default App;
