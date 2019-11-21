import React from 'react';
import PropTypes from 'prop-types';

const WeatherImage = props => {
  return <img alt={props.weather} src={`/icons/${props.weather}.svg`} />;
};

WeatherImage.propTypes = {
  weather: PropTypes.string.isRequired
};

export default WeatherImage;
