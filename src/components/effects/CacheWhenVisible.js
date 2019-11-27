import config from '../../config';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

const CacheWhenVisible = ({ person, render }) => {
  const [isVisible, setIsVisible] = useState(false);
  const positionRef = useRef(null);
  const throttle = 50;
  let throttleCounter = 0;

  const scrollHandler = () => {
    if (throttleCounter % throttle === 0) {
      if (positionRef.current) {
        if (
          positionRef.current.getBoundingClientRect().top < window.innerHeight
        ) {
          console.log(`${person.name} now visible`);
          setIsVisible(true);
        }
      }
    }
    throttleCounter++;
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return function cleanUp() {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  useEffect(() => {
    let isCancelled = false;

    if (isVisible) {
      console.log(`Caching weather for ${person.name}`);
      cacheWeatherAndForecast(isCancelled);
    }

    return function cleanUp() {
      isCancelled = true;
    };
  }, [isVisible]);

  const cacheWeatherAndForecast = async isCancelled => {
    if (!isCancelled) {
      const cache = await window.caches.open('weather-station-forecasts');

      const weatherUrl = `${config.apiUrl}/api/weather?lat=${person.lat}&long=${person.long}`;
      const forecastUrl = `${config.apiUrl}/api/forecast?lat=${person.lat}&long=${person.long}`;

      const [
        cachedWeatherRequests,
        cachedForecastRequests
      ] = await Promise.all([
        cache.matchAll(weatherUrl),
        cache.matchAll(forecastUrl)
      ]);

      if (
        cachedWeatherRequests.length === 0 &&
        cachedForecastRequests.length === 0
      ) {
        try {
          await cache.addAll([weatherUrl, forecastUrl]);
          console.log(`Filled cache for ${person.name}`);
        } catch (e) {
          console.log(`Unable to fill cache for ${person.name}`);
        }
      } else {
        console.log(`Cache already filled for ${person.name}`);
      }
    }
  };

  return <div ref={positionRef}>{render(person)}</div>;
};

CacheWhenVisible.propTypes = {
  person: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired
};

export default CacheWhenVisible;
