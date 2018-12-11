import React, { Component } from "react";
import Header from "./components/Header";
import Sketch from "./components/Sketch";
import p5 from "p5";
import styled from "styled-components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentWrapper>
          <Sketch
            title={"hi"}
            sketchTitle={"Test Sketch One"}
            renderTarget={"p5sketchOne"}
            sketch={`let sketch = new p5(p => {
              const x = 200;
              const y = 200;
            
              p.setup = function() {
                p.createCanvas(x, y).parent({renderTarget});
              };
            
              p.draw = function() {
                p.background(0);
                p.fill(255, 0, 100);
                p.rect(x / 2, y / 2, 20, 20);
              };
            });`}
          />
        </ContentWrapper>
      </div>
    );
  }
}

export default App;

const ContentWrapper = styled.div`
  margin: 10vh 10vw;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
