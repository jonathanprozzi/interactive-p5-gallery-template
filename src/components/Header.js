import React from "react";
import styled from "styled-components";

const Header = () => (
  <Masthead>
    <SiteTitle>Digital Harbor Foundation: Interactive p5 Gallery</SiteTitle>
  </Masthead>
);

export default Header;

const Masthead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0px;
  background-color: #0091c9;
`;
const SiteTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 2.25rem;
  color: #ffffff;
  padding: 0px;
  margin: 0px;

  @media only screen and (max-width: 1000px) {
    font-size: 1.5rem;
    margin-left: 50px;
  }
`;
