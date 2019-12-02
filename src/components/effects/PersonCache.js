import config from '../../config';
import PropTypes from 'prop-types';
import React from 'react';

const PersonCache = props => {
  const cacheWeatherAndForecast = async () => {
    console.log(`WeatherStation: Filling cache for ${props.person.name}`);
    const cache = await window.caches.open('weather-station-api');

    const forecastUrl = `${config.apiUrl}/api/forecast?lat=${props.person.lat}&long=${props.person.long}`;
    const personUrl = `${config.apiUrl}/api/people/${props.person.id}`;
    const weatherUrl = `${config.apiUrl}/api/weather?lat=${props.person.lat}&long=${props.person.long}`;

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
      try {
        await cache.addAll([forecastUrl, personUrl, weatherUrl]);
        console.log(`WeatherStation: Filled cache for ${props.person.name}`);
      } catch (e) {
        console.log(
          `WeatherStation: Unable to fill cache for ${props.person.name}`
        );
      }
    } else {
      console.log(
        `WeatherStation: Cache already filled for ${props.person.name}`
      );
    }
  };

  return props.children({ cacheRequests: cacheWeatherAndForecast });
};

PersonCache.propTypes = {
  children: PropTypes.any.isRequired,
  person: PropTypes.object.isRequired
};

export default PersonCache;
