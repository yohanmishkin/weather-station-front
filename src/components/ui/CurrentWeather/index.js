import WeatherImage from '../WeatherImage';
import React from 'react';
import styled from 'styled-components';

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

const CurrentWeather = ({ person }) => {
  return (
    <StyledWeather>
      <img alt={`${person.name}'s headshot`} src={person.imageUrl} />
      <h1 className="font-playfair">{person.name}</h1>
      <h2 className="font-playfair">{person.currentTemperature}</h2>
      <WeatherImage weather={person.currentWeather} />
    </StyledWeather>
  );
};

export default CurrentWeather;
