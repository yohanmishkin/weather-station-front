import WeatherImage from '../WeatherImage';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import withLoading from '../withLoading';

const CurrentWeather = ({ person, weather }) => {
  return (
    <StyledWeather>
      <WeatherImage weather={weather.type} />
      <h1 className="font-playfair">{person.name}</h1>
      <h2 className="font-playfair">{weather.temperature}°F</h2>
    </StyledWeather>
  );
};

CurrentWeather.propTypes = {
  person: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired
};

const StyledWeather = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 60%;

  img {
    border-radius: 0.35rem;
    margin: auto;
    margin-bottom: 1rem;
    margin-top: unset;
    max-width: 20rem;
    width: 100%;
  }

  h1 {
    margin: auto;
    margin-bottom: 1rem;
    margin-top: unset;
  }
`;

export default withLoading(CurrentWeather, 'weather-loading');
