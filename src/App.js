import React, { Component } from 'react';
import './App.css';
import Header from "./header";
import Trial from "./trial"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Trial/>
      </div>
    );
  }
}

export default App;
