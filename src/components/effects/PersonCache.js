import config from '../../config';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import CacheCount from '../contexts/CacheCount';

const PersonCache = props => {
  const { incrementCount: incrementCacheCount } = useContext(CacheCount);
  const [alreadyCached, setAlreadyCached] = useState(false);
  const [isPersonCached, setIsPersonCached] = useState(false);
  const [isWeatherCached, setIsWeatherCached] = useState(false);
  const forecastUrl = `${config.apiUrl}/api/forecast?lat=${props.person.lat}&long=${props.person.long}`;
  const personUrl = `${config.apiUrl}/api/people/${props.person.id}`;
  const weatherUrl = `${config.apiUrl}/api/weather?lat=${props.person.lat}&long=${props.person.long}`;

  useEffect(() => {
    let isCancelled = false;

    const checkPersonCache = async () => {
      if (!isCancelled) {
        try {
          const cache = await window.caches.open('weather-station-api');

          const cachedPersonRequests = await cache.matchAll(personUrl);

          if (cachedPersonRequests.length === 0) {
            setIsPersonCached(false);
          } else {
            console.log(
              `WeatherStation: Person cache already filled for ${props.person.name}`
            );
            setIsPersonCached(true);
          }
        } catch (e) {
          console.log(e);
        }
      }
    };

    if (window.caches) {
      checkPersonCache();
    }

    return function cleanUp() {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const checkWeatherCache = async () => {
      if (!isCancelled) {
        try {
          const cache = await window.caches.open('weather-station-api');

          const [
            cachedForecastRequests,
            cachedWeatherRequests
          ] = await Promise.all([
            cache.matchAll(forecastUrl),
            cache.matchAll(weatherUrl)
          ]);

          if (
            cachedForecastRequests.length === 0 &&
            cachedWeatherRequests.length === 0
          ) {
            setIsWeatherCached(false);
          } else {
            console.log(
              `WeatherStation: Weather cache already filled for ${props.person.lat},${props.person.long}`
            );
            setIsWeatherCached(true);
          }
        } catch (e) {
          console.log(e);
        }
      }
    };

    if (window.caches) {
      checkWeatherCache();
    }

    return function cleanUp() {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (isPersonCached && isWeatherCached) {
      setAlreadyCached(true);
      incrementCacheCount();
    } else {
      setAlreadyCached(false);
    }
  }, [isPersonCached, isWeatherCached]);

  const fillCache = async () => {
    if (!alreadyCached) {
      console.log(`WeatherStation: Filling cache for ${props.person.name}`);

      try {
        const cache = await window.caches.open('weather-station-api');

        await cache.addAll([forecastUrl, personUrl, weatherUrl]);

        setAlreadyCached(true);
        incrementCacheCount();

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
