import AnimatedLogo from './AnimatedLogo';
import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <StyledHeader>
    <AnimatedLogo />
    <h1 className="font-playfair">WeatherStation</h1>
  </StyledHeader>
);

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 3.5rem;
    margin-left: 1rem;
    margin-top: 1rem;

    @media (min-width: 750px) {
      margin-left: 3rem;
    }
  }

  h1 {
    margin-right: 1rem;
    margin-top: 2rem;
    text-align: center;

    @media (min-width: 750px) {
      margin-right: 3rem;
      text-align: right;
    }
  }
`;

export default Header;
