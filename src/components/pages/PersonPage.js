import PersonContainer from '../effects/PersonContainer';
import CurrentWeather from '../ui/CurrentWeather';
import Forecast from '../ui/Forecast';
import React from 'react';
import { Link } from 'react-router-dom';
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

export default function(props) {
  return (
    <PersonContainer id={props.id}>
      {({ person }) => (
        <Layout>
          <Link to="/">Back to people</Link>
          <CurrentWeather person={person} />
          <Forecast person={person} />
        </Layout>
      )}
    </PersonContainer>
  );
}
// <Curve>
//   <div className="wave-one"></div>
//   <div className="wave-two"></div>
// </Curve>
// <StyledLink to="/">Back to people</StyledLink>
