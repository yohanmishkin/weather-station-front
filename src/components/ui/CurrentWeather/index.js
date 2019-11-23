import WeatherImage from '../WeatherImage';
import PropTypes from 'prop-types';
import React from 'react';
import { config, Spring } from 'react-spring/renderprops';
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
          <Spring
            config={config.molasses}
            from={{ number: 0 }}
            to={{ number: weather.temperature }}
          >
            {props => (
              <h2 className="font-playfair">{props.number.toFixed(0)}°F</h2>
            )}
          </Spring>
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
  text-align: center;
  width: 60%;

  img {
    border-radius: 0.35rem;
    max-width: 20rem;
    width: 100%;
  }
`;

export default withLoading(CurrentWeather, 'weather-loading');
