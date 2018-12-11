import { sketchData } from "./data.js";
import p5 from "p5";
import React, { Component } from "react";

let processSketch = (...values) => {
  return `${values}
`;
};

{
  /*
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

*/
}

class Sketch extends Component {
  componentDidMount() {
    const sketchScriptElement = document.createElement("script");
    const sketchScript = document.createTextNode(
      processSketch(`${sketchData[0].sketch}`)
    );
    sketchScriptElement.appendChild(sketchScript);
    document.body.appendChild(sketchScriptElement);
  }
  render() {
    return (
      <div>
        <h2>{sketchData[1].title}</h2>
        <div id="p5sketch" />
      </div>
    );
  }
}

export default Sketch;
