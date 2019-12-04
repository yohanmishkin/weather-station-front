/* eslint-disable no-constant-condition */
import Logo from './logo.svg';
import React from 'react';
import { Spring } from 'react-spring/renderprops.cjs';

const AnimatedLogo = () => {
  return (
    <Spring
      from={{ transform: 'scale(0.1)' }}
      to={{ transform: 'scale(1)' }}
      config={{ mass: 1.5, tension: 1000, friction: 30 }}
    >
      {props => <img alt="" src={Logo} style={props} />}
    </Spring>
  );
};

export default AnimatedLogo;
