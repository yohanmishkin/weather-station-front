import config from '../../config';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';

const CacheWhenVisible = ({ person, render }) => {
  const [topOfPersonCard, setTop] = useState(0);
  const positionRef = useCallback(node => {
    if (node !== null) {
      setTop(node.getBoundingClientRect().top);
    }
  });

  if (window.caches) {
    useEffect(() => {
      let isCancelled = false;

      const cacheWeatherAndForecast = async () => {
        if (!isCancelled) {
          const cache = await window.caches.open('weather-station-forecasts');
          cache.addAll([
            `${config.apiUrl}/api/weather?lat=${person.lat}&long=${person.long}`,
            `${config.apiUrl}/api/forecast?lat=${person.lat}&long=${person.long}`
          ]);
        }
      };

      window.addEventListener('scroll', () => {
        let isVisible = topOfPersonCard < window.innerHeight;
        if (isVisible) {
          cacheWeatherAndForecast();
        }
      });

      return function cleanUp() {
        isCancelled = true;
      };
    }, [top]);
  }

  return <div ref={positionRef}>{render(person)}</div>;
};

CacheWhenVisible.propTypes = {
  person: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired
};

export default CacheWhenVisible;
