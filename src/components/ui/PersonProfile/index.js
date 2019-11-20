import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  padding-bottom: 1rem;
  padding-top: 1rem;
  text-align: center;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  img {
    border-radius: 0.35rem;
    margin: auto;
    margin-bottom: 1rem;
    margin-top: unset;
    max-width: 20rem;
    width: 100%;
  }

  h1 {
    flex-grow: 1;
    margin: auto;
    margin-bottom: 1rem;
    margin-top: unset;
  }

  dl {
    display: flex;
    overflow-x: scroll;
    margin-bottom: 4rem;
    min-height: 6rem;
    scroll-snap-type: x mandatory;
    scroll-padding: 50%;
  }

  .row {
    background-color: white;
    border-radius: 0.5rem;
    margin-left: 2rem;
    min-width: 6rem;
    padding: 1rem;
    scroll-snap-align: center;
  }

  dt {
    font-size: 1.125rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  dd {
    margin-left: unset;
  }
`;

const PersonProfile = ({ person }) => {
  return (
    <>
      <StyledLink to="/">Back to people</StyledLink>
      <Profile>
        <img alt={`${person.name}'s headshot`} src={person.imageUrl} />
        <h1 className="font-playfair">{person.name}</h1>
        <dl>
          {person.forecasts.map((forecast, index) => (
            <div className="row" key={index}>
              <dt>{forecast.period}</dt>
              <dd>{forecast.shortDescription}</dd>
            </div>
          ))}
        </dl>
      </Profile>
    </>
  );
};

export default PersonProfile;
