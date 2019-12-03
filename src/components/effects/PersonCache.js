import config from '../../config';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const PersonCache = props => {
  const [alreadyCached, setAlreadyCached] = useState(false);
  const forecastUrl = `${config.apiUrl}/api/forecast?lat=${props.person.lat}&long=${props.person.long}`;
  const personUrl = `${config.apiUrl}/api/people/${props.person.id}`;
  const weatherUrl = `${config.apiUrl}/api/weather?lat=${props.person.lat}&long=${props.person.long}`;

  useEffect(() => {
    let isCancelled = false;

    const checkCache = async () => {
      const cache = await window.caches.open('weather-station-api');

      if (!isCancelled) {
        const [
          cachedForecastRequests,
          cachedPersonRequests,
          cachedWeatherRequests
        ] = await Promise.all([
          cache.matchAll(forecastUrl),
          cache.matchAll(personUrl),
          cache.matchAll(weatherUrl)
        ]);

        if (
          cachedForecastRequests.length === 0 &&
          cachedPersonRequests.length === 0 &&
          cachedWeatherRequests.length === 0
        ) {
          setAlreadyCached(false);
        } else {
          console.log(
            `WeatherStation: Cache already filled for ${props.person.name}`
          );
          console.group([forecastUrl, personUrl, weatherUrl]);
          console.groupEnd();
          setAlreadyCached(true);
        }
      }
    };

    checkCache();

    return function cleanUp() {
      isCancelled = true;
    };
  }, [props.person.id]);

  const fillCache = async () => {
    console.log(`WeatherStation: Filling cache for ${props.person.name}`);
    if (!alreadyCached) {
      try {
        const cache = await window.caches.open('weather-station-api');
        await cache.addAll([forecastUrl, personUrl, weatherUrl]);
        setAlreadyCached(true);
        console.log(`WeatherStation: Filled cache for ${props.person.name}`);
      } catch (e) {
        console.group([
          `WeatherStation: Unable to fill cache for ${props.person.name}`,
          e
        ]);
        console.groupEnd();
      }
    }
  };

  return props.children({
    alreadyCached,
    cachePerson: fillCache
  });
};

PersonCache.propTypes = {
  children: PropTypes.any.isRequired,
  person: PropTypes.object.isRequired
};

export default PersonCache;
