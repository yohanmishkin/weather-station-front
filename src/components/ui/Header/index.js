import AnimatedLogo from '../AnimatedLogo';
import React from 'react';
import styled from 'styled-components';
import CacheCount from '../../contexts/CacheCount';

const Header = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <AnimatedLogo />
        <CacheCount.Consumer>
          {({ count }) =>
            count > 0 ? (
              <span className="cache-count" data-testid="total-cache-count">
                {count}
              </span>
            ) : null
          }
        </CacheCount.Consumer>
      </StyledDiv>

      <h1 className="font-playfair">WeatherStation</h1>
      <FrostedGlass />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 10;

  h1 {
    margin-right: 1rem;
    margin-top: 1rem;
    text-align: center;

    @media (min-width: 750px) {
      margin-right: 3rem;
      margin-top: 2rem;
      text-align: right;
    }
  }
`;

const StyledDiv = styled.div`
  position: relative;

  img {
    height: 3.5rem;
    margin-left: 1rem;
    margin-top: 1rem;

    @media (min-width: 750px) {
      margin-left: 3rem;
    }
  }

  .cache-count {
    background-color: #fff1e8;
    color: #000119;
    position: absolute;
    right: 15%;
    top: 55%;
    z-index: 10;
  }
`;

const FrostedGlass = styled.div`
  background: #fff1e8;
  height: 100%;
  opacity: 0.95;
  position: absolute;
  width: 100%;
  z-index: -10;
`;

export default Header;
