import { sketchData } from "./data.js";
import p5 from "p5";
import styled from "styled-components";
import React, { Component } from "react";

let processSketch = (...values) => {
  return `${values}
  `;
};

class DynamicSketch extends Component {
  componentDidMount() {
    const sketchScriptElement = document.createElement("script");

    const sketchScript = document.createTextNode(
      processSketch(`${sketchData[0].sketch} ${sketchData[1].sketch}`)
    );
    sketchScriptElement.appendChild(sketchScript);
    document.body.appendChild(sketchScriptElement);
  }
  render() {
    return (
      <div>
        <h2>{sketchData[1].title}</h2>
        <SketchWrapper>
          <div id="p5sketch" />
          <div id="p5sketch2" />
        </SketchWrapper>
      </div>
    );
  }
}

const SketchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default DynamicSketch;
