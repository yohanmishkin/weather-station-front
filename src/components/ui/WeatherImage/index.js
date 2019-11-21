import React from 'react';
import PropTypes from 'prop-types';

const WeatherImage = ({ weather }) => {
  return <img alt={weather} src={`/icons/${weather}.svg`} />;
};

WeatherImage.propTypes = {
  weather: PropTypes.string.isRequired
};

export default WeatherImage;
