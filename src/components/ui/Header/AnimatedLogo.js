import Logo from './logo.svg';
import React from 'react';
import { animated, useSpring } from 'react-spring';

const AnimatedLogo = () => {
  const props = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { mass: 1.5, tension: 1000, friction: 30 }
  });

  return <animated.img alt="" src={Logo} style={props} />;
};

export default AnimatedLogo;
