import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  border: transparent solid 0.2rem;
  color: inherit;
  display: block;
  margin-bottom: 1rem;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s;

  :hover {
    border-bottom: solid 0.2rem;
    color: #675baa;
  }

  img {
    border-radius: 0.35rem;
    width: 100%;
  }
`;

const PersonCard = ({ person }) => {
  return (
    <StyledLink to={`/people/${person.id}`} data-testid={`person-${person.id}`}>
      <img alt={`${person.name}'s headshot`} src={person.imageUrl} />
      <h2 className="font-playfair">{person.name}</h2>
      <h3>{person.temperature}</h3>
    </StyledLink>
  );
};

export default PersonCard;
