import AnimatedLogo from './AnimatedLogo';
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
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export default Header;
