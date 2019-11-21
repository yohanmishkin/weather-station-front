import PersonContainer from '../effects/PersonContainer';
import CurrentWeather from '../ui/CurrentWeather';
import Forecast from '../ui/Forecast';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PersonPage = ({ id }) => {
  return (
    <PersonContainer id={id}>
      {({ isLoading, forecasts, person, weather }) => (
        <Layout>
          <Link to="/">Back to people</Link>
          <CurrentWeather
            isLoading={isLoading}
            person={person}
            weather={weather}
          />
          <Forecast isLoading={isLoading} forecasts={forecasts} />
        </Layout>
      )}
    </PersonContainer>
  );
};

PersonPage.propTypes = {
  id: PropTypes.any.isRequired
};

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

export default PersonPage;

// <Curve>
//   <div className="wave-one"></div>
//   <div className="wave-two"></div>
// </Curve>
