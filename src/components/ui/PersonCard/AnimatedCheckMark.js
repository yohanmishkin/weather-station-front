import CheckMark from './icon-check-grape.svg';
import React from 'react';
import { animated, useSpring } from 'react-spring';

const AnimatedCheckMark = () => {
  const props = useSpring({
    from: { transform: 'scale(0.1)' },
    to: { transform: 'scale(1)' },
    config: { mass: 1, tension: 400, friction: 18 }
  });

  return (
    <animated.img
      alt="weather is cached"
      className="is-cached"
      src={CheckMark}
      style={props}
    />
  );
};

export default AnimatedCheckMark;
