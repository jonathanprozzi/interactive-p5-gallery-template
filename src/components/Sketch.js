import { sketchData } from "./data.js";

import React, { Component } from "react";

class Sketch extends Component {
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
