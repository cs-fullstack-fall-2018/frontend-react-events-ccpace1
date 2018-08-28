import React, { Component } from 'react';
import './App.css';
import ScoreKeeper from "./ScoreKeeper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
          <ScoreKeeper score={0}/>
      </div>
    );
  }
}

export default App;
