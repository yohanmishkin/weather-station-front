import PersonContainer from '../effects/PersonContainer';
import CurrentWeather from '../ui/CurrentWeather';
import Waves from '../ui/Waves';
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
          <Waves />
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

  a {
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 1.125rem;
    color: #000119;

    :hover {
      color: #675baa;
    }
  }

  @media (min-width: 750px) {
    flex-direction: row;
    height: 100vh;

    a {
      margin-bottom: unset;
      margin-top: unset;
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
  }
`;

export default PersonPage;
