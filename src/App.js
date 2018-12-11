import React, { Component } from "react";
import Header from "./components/Header";
import Sketch from "./components/Sketch";
import styled from "styled-components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentWrapper>
          <Sketch />
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
