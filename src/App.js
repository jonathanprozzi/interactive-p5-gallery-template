import React, { Component } from "react";
import Header from "./components/Header";
import Sketch from "./components/Sketch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sketch />
      </div>
    );
  }
}

export default App;
