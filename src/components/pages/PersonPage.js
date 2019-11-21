import PersonContainer from '../effects/PersonContainer';
import CurrentWeather from '../ui/CurrentWeather';
import Forecast from '../ui/Forecast';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  position: relative;

  @media (min-width: 750px) {
    flex-direction: row;
    height: 100vh;

    a {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
  }
`;

const WeatherOnceLoaded = props => {
  if (props.isLoading) {
    return <span data-testid="current-weather-loading">Loading!</span>;
  }

  return <CurrentWeather person={props.person} />;
};

const PersonPage = props => {
  return (
    <PersonContainer id={props.id}>
      {({ isLoading, person }) => (
        <Layout>
          <Link to="/">Back to people</Link>
          <WeatherOnceLoaded isLoading={isLoading} person={person} />
          <Forecast person={person} />
        </Layout>
      )}
    </PersonContainer>
  );
};

PersonPage.propTypes = {
  id: PropTypes.any.isRequired
};

export default PersonPage;

// <Curve>
//   <div className="wave-one"></div>
//   <div className="wave-two"></div>
// </Curve>
