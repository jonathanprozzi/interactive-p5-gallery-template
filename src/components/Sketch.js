import p5 from "p5";
import styled from "styled-components";
import React, { Component } from "react";
import PropTypes from "prop-types";

class Sketch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sketch: null,
      renderTarget: null,
      sketchTitle: null
    };

    this.sketchPropsToState = this.sketchPropsToState.bind(this);
  }

  sketchPropsToState(sketch, element, title) {
    this.setState({
      sketch: sketch,
      renderTarget: element,
      sketchTitle: title
    });
  }

  componentDidMount() {
    this.sketchPropsToState(
      this.props.sketch,
      this.props.renderTarget,
      this.props.sketchTitle
    );
    console.log(this.props.sketch);
  }

  render() {
    return (
      <div>
        <h2>{this.state.sketchTitle}</h2>
        {/* <div id="p5sketchOne" /> */}
        <div id={this.state.renderTarget} />
      </div>
    );
  }
}

Sketch.propTypes = {
  sketch: PropTypes.string,
  renderTarget: PropTypes.string,
  sketchTitle: PropTypes.string
};

export default Sketch;
