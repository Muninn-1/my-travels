import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Traveling around the World!</h1>
        </header>
        <Travel
          destination="Grand Canyon"
          country="Arizona, USA"
          photo="https://www.google.com/maps/about/images/treks/canyon6-carousel.jpg"
          distance="666km"
        />
        <Travel
          destination="Tower Bridge"
          country="England"
          photo="https://www.towerbridge.org.uk/media/assets/image/thumbs/Guide-Book-Cover-22.jpg.952x602_q100.jpg"
          distance="777km"
        />
      </div>
    );
  }
}

export default App;
