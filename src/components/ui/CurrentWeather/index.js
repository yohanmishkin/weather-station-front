import WeatherImage from '../WeatherImage';
import withLoading from '../withLoading';
import PropTypes from 'prop-types';
import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components';

const CurrentWeather = ({ person, weather }) => {
  const props = useSpring({
    config: config.stiff,
    from: { transform: 'translateX(-500px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 }
  });

  return (
    <StyledWeather style={props}>
      <WeatherImage weather={weather.type} />
      <h1 className="font-playfair">{person.name}</h1>
      <h2>{weather.type}</h2>
      {weather.temperature ? (
        <h3 className="font-playfair">{weather.temperature.toFixed(0)}°F</h3>
      ) : null}
    </StyledWeather>
  );
};

CurrentWeather.propTypes = {
  person: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired
};

const StyledWeather = styled(animated.div)`
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
