import { sketchData } from "./data.js";
import p5 from "p5";
import styled from "styled-components";
import React, { Component } from "react";

class Sketch extends Component {
  componentDidMount() {
    let sketch = new p5(p => {
      const x = 200;
      const y = 200;

      p.setup = function() {
        p.createCanvas(x, y).parent("p5sketch");
      };

      p.draw = function() {
        p.background(0);
        p.fill(255, 0, 100);
        p.rect(x / 2, y / 2, 20, 20);
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Sketch One</h2>
        <div id="p5sketch" />
      </div>
    );
  }
}

export default Sketch;
