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
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 0.35rem;
    max-width: 20rem;
    width: 100%;
  }

  ol {
    list-style: none;
    padding-left: unset;
  }
`;

const PersonProfile = ({ person }) => {
  return (
    <div>
      <StyledLink to="/">Back to people</StyledLink>
      <Profile>
        <img alt={`${person.name}'s headshot`} src={person.imageUrl} />
        <h1 className="font-playfair">{person.name}</h1>
        <h2>{person.temperature}</h2>
        <dl>
          {person.forecasts.map((forecast, index) => (
            <div key={index}>
              <dt>{forecast.period}</dt>
              <dd>{forecast.shortDescription}</dd>
            </div>
          ))}
        </dl>
      </Profile>
    </div>
  );
};

export default PersonProfile;
