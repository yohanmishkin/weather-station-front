import React from 'react';
import PropTypes from 'prop-types';
import levenshteinWeather from './levenshtein-weather';
import { ReactComponent as Clear } from './clear.svg';
import { ReactComponent as Cloudy } from './cloudy.svg';
import { ReactComponent as FreezingRain } from './freezing-rain.svg';
import { ReactComponent as Hail } from './hail.svg';
import { ReactComponent as HeavyRainShowers } from './heavy-rain-showers.svg';
import { ReactComponent as HeavySnowShowers } from './heavy-snow.svg';
import { ReactComponent as Hurricane } from './hurricane.svg';
import { ReactComponent as LightRainShowers } from './light-rain-showers.svg';
import { ReactComponent as LightSnow } from './light-snow.svg';
import { ReactComponent as MostlyClear } from './mostly-clear.svg';
import { ReactComponent as MostlyCloudy } from './mostly-cloudy.svg';
import { ReactComponent as PartlySunny } from './partly-sunny.svg';
import { ReactComponent as RainShowers } from './rain-showers.svg';
import { ReactComponent as SnowShowers } from './snow-showers.svg';
import { ReactComponent as SunLightRainShowers } from './sun-light-rain-showers.svg';
import { ReactComponent as SunRainShowers } from './sun-rain-showers.svg';
import { ReactComponent as SunSnowShowers } from './sun-snow-showers.svg';
import { ReactComponent as Sunny } from './sunny.svg';
import { ReactComponent as Thunderstorms } from './thunderstorms.svg';

const typesOfWeather = {
  clear: Clear,
  cloudy: Cloudy,
  'freezing-rain': FreezingRain,
  hail: Hail,
  'heavy-rain-showers': HeavyRainShowers,
  'heavy-snow': HeavySnowShowers,
  hurricane: Hurricane,
  'light-rain-showers': LightRainShowers,
  'light-snow': LightSnow,
  'mostly-clear': MostlyClear,
  'mostly-cloudy': MostlyCloudy,
  'partly-sunny': PartlySunny,
  'rain-showers': RainShowers,
  'snow-showers': SnowShowers,
  'sun-light-rain-showers': SunLightRainShowers,
  'sun-rain-showers': SunRainShowers,
  'sun-snow-showers': SunSnowShowers,
  sunny: Sunny,
  thunderstorms: Thunderstorms
};

const WeatherImage = ({ weather }) => {
  if (weather === 'unknown') {
    return <span>❔</span>;
  }

  let closestMatch = levenshteinWeather(weather, Object.keys(typesOfWeather));
  let ApproximateWeather = typesOfWeather[closestMatch];
  return <ApproximateWeather data-testid={`${closestMatch}-svg`} />;
};

WeatherImage.propTypes = {
  weather: PropTypes.string
};

WeatherImage.defaultProps = {
  weather: 'unknown'
};

export default WeatherImage;
