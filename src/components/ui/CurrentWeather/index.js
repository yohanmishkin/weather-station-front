import WeatherImage from '../WeatherImage';
import PropTypes from 'prop-types';
import React from 'react';
import { config, Spring } from 'react-spring/renderprops.cjs'; // cjs? -> https://github.com/facebook/jest/issues/8186
import styled from 'styled-components';
import withLoading from '../withLoading';

const CurrentWeather = ({ person, weather }) => {
  return (
    <Spring
      config={config.stiff}
      from={{ transform: 'translateX(-500px)', opacity: 0 }}
      to={{ transform: 'translateX(0)', opacity: 1 }}
    >
      {props => (
        <StyledWeather style={props}>
          <WeatherImage weather={weather.type} />
          <h1 className="font-playfair">{person.name}</h1>
          <h2>{weather.type}</h2>
          {weather.temperature ? (
            <h3 className="font-playfair">
              {weather.temperature.toFixed(0)}°F
            </h3>
          ) : null}
        </StyledWeather>
      )}
    </Spring>
  );
};

CurrentWeather.propTypes = {
  person: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired
};

const StyledWeather = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  text-align: center;

  svg {
    margin-bottom: 1rem;
  }

  h2,
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`;

export default withLoading(CurrentWeather, 'weather-loading');
