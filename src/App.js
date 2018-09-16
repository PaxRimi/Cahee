import React, { Component } from 'react';
import './App.css';
import Header from "./header";
import Trial from "./trial";
import About from "./about";
import Services from "./services"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Trial/>
        <About/>
        <Services/>
      </div>
    );
  }
}

export default App;
