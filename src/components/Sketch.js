import { sketchData } from "./data.js";
import p5 from "p5";
import React, { Component } from "react";

const processSketch = sketchInfo => {
  console.log(sketchInfo);
  const runSketch = function(sketchInfo) {
    `
    `;
  };
};

class Sketch extends Component {
  render() {
    return (
      <div>
        <h2>{sketchData[0].title}</h2>
        <main dangerouslySetInnerHTML={{ __html: sketchData[0].content }} />
        {processSketch(sketchData[0].sketch)}
      </div>
    );
  }
}

export default Sketch;
