/* eslint-disable no-constant-condition */
import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { Keyframes } from 'react-spring/renderprops.cjs';

const Curve = () => {
  return (
    <Layout>
      <WavesContainer>
        <LoopOne>{props => <WaveOne className="wave" style={props} />}</LoopOne>
        <LoopTwo>{props => <WaveTwo className="wave" style={props} />}</LoopTwo>
        <WaveThree className="wave" />
      </WavesContainer>
    </Layout>
  );
};

const LoopOne = Keyframes.Spring(async next => {
  while (true) {
    await next({
      config: { mass: 5, tension: 35, friction: 100 },
      from: { transform: 'skewY(-1deg)' },
      to: { transform: 'skewY(1deg)' }
    });
    await next({
      config: { mass: 5, tension: 35, friction: 100 },
      from: { transform: 'skewY(1deg)' },
      to: { transform: 'skewY(-1deg)' }
    });
  }
});

const LoopTwo = Keyframes.Spring(async next => {
  while (true) {
    await next({
      config: { mass: 12, tension: 20, friction: 100 },
      from: { transform: 'skewY(-10deg)' },
      to: { transform: 'skewY(2deg)' }
    });
    await next({
      config: { mass: 12, tension: 20, friction: 100 },
      from: { transform: 'skewY(2deg)' },
      to: { transform: 'skewY(-10deg)' }
    });
  }
});

const Layout = styled.div`
  bottom: 0;
  position: absolute;
  height: 63%;
  width: 100%;
  z-index: -10;

  .wave {
    bottom: 0;
    position: absolute;
    width: 120%;
  }

  @media (min-width: 750px) {
    height: 30%;
  }
`;

const WavesContainer = styled.div`
  height: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const WaveOne = styled(animated.div)`
  background: #a199ce;
  border-top-right-radius: 100%;
  height: 80%;
`;

const WaveTwo = styled(animated.div)`
  background: #8b80c8;
  border-top-left-radius: 10%;
  border-top-right-radius: 100%;
  height: 70%;
`;

const WaveThree = styled(animated.div)`
  background: #675baa;
  border-top-left-radius: 20%;
  border-top-right-radius: 90%;
  height: 60%;
`;

export default Curve;
