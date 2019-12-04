import CheckMark from './icon-check-grape.svg';
import React from 'react';
import { Spring } from 'react-spring/renderprops.cjs';

const AnimatedCheckMark = () => {
  return (
    <Spring
      from={{ transform: 'scale(0.1)' }}
      to={{ transform: 'scale(1)' }}
      config={{ mass: 1, tension: 400, friction: 18 }}
    >
      {props => (
        <img
          alt="weather is cached"
          className="is-cached"
          src={CheckMark}
          style={props}
        />
      )}
    </Spring>
  );
};

export default AnimatedCheckMark;
