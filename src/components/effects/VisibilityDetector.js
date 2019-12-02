import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

const CacheWhenVisible = ({ children, onShown, onHidden }) => {
  const [isVisible, setIsVisible] = useState(false);
  const positionRef = useRef(null);
  const throttle = 10;
  let throttleCounter = 0;

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return function cleanUp() {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  const scrollHandler = () => {
    if (throttleCounter % throttle === 0) {
      if (positionRef.current) {
        if (isVisible === false) {
          if (
            positionRef.current.getBoundingClientRect().top <
              window.innerHeight &&
            positionRef.current.getBoundingClientRect().top > 0
          ) {
            onShown();
            setIsVisible(true);
          }
        }

        if (isVisible === true) {
          if (
            positionRef.current.getBoundingClientRect().bottom < 0 ||
            positionRef.current.getBoundingClientRect().top > window.innerHeight
          ) {
            onHidden();
            setIsVisible(false);
          }
        }
      }
    }
    throttleCounter++;
  };

  return <div ref={positionRef}>{children}</div>;
};

CacheWhenVisible.propTypes = {
  children: PropTypes.object.isRequired,
  onShown: PropTypes.func,
  onHidden: PropTypes.func
};

CacheWhenVisible.defaultProps = {
  onShown: () => {},
  onHidden: () => {}
};

export default CacheWhenVisible;
