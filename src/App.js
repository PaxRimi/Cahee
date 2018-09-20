import React, { Component } from 'react';
import './App.css';
import Header from "./header";
import Trial from "./trial";
import About from "./about";
import Services from "./services";
import Gallery from "./gallery";
import Subscription from "./subscription";
import Blog from "./blog";
import Contact from "./contact";
import Footer from "./footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Trial/>
        <About/>
        <Services/>
        <Gallery/>
        <Subscription/>
        <Blog/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
