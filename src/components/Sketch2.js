import p5 from "p5";
import styled from "styled-components";
import React, { Component } from "react";

class Sketch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderTarget: null,
      sketch: null
    };

    this.sketchPropsToState = this.sketchPropsToState.bind(this);
  }

  sketchPropsToState(sketchInfo, element) {
    this.setState({ sketch: sketchInfo, renderTarget: element });
  }

  componentDidMount() {
    let sketch = new p5(p => {
      const x = 200;
      const y = 200;

      p.setup = function() {
        /*p.createCanvas(x, y).parent("p5sketchOne");*/
        p.createCanvas(x, y).parent(this.props.renderTarget);
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
        <h2>{this.props.sketchTitle}</h2>
        {/* <div id="p5sketchOne" /> */}
        <div id={this.props.renderTarget} />
      </div>
    );
  }
}

export default Sketch;
