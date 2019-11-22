import React from 'react';
import PropTypes from 'prop-types';
import Fog from './fog-weather.svg';
import HeavyRain from './torrential-rain-weather.svg';
import RainShowers from './rain-showers.svg';
import SnowShowers from './light-snowy-weather.svg';
import Thunderstorms from './lightning-weather.svg';

const typesOfWeather = {
  fog: Fog,
  rain: HeavyRain,
  rain_showers: RainShowers,
  sleet: RainShowers,
  snow_showers: SnowShowers,
  thunderstorms: Thunderstorms
};

const WeatherImage = ({ weather }) => {
  return <img alt={weather} src={typesOfWeather[weather]} />;
};

WeatherImage.propTypes = {
  weather: PropTypes.string.isRequired
};

export default WeatherImage;
