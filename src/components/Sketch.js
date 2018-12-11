import { sketchData } from "./data.js";
import p5 from "p5";
import React, { Component } from "react";

let processSketch = (strings, ...values) => {
  return `${values}`;
};

let sketch = new p5(p => {
  const x = 100;
  const y = 100;

  p.setup = function() {
    p.createCanvas(x, y);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255, 0, 100);
    p.rect(x / 2, y / 2, 20, 20);
  };
});

const sketchOutput = processSketch`${[sketchData[0].sketch]}`;

class Sketch extends Component {
  componentDidMount() {
    processSketch`${[sketchData[0].sketch]}`;
    console.log(sketchOutput);
  }
  render() {
    return (
      <div>
        <h2>{sketchData[0].title}</h2>
        <main dangerouslySetInnerHTML={{ __html: sketchData[0].content }} />
      </div>
    );
  }
}

export default Sketch;
