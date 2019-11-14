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

  :hover {
    border-bottom: solid 0.2rem;
    color: #675baa;
    transition: all 0.3s;
  }
`;

const Name = styled.h2``;

const Temperature = styled.h3``;

const PersonCard = ({ person }) => {
  return (
    <StyledLink to={`/people/${person.id}`} data-testid={`person-${person.id}`}>
      <Name className="font-playfair">{person.name}</Name>
      <Temperature>{person.temperature}</Temperature>
    </StyledLink>
  );
};

export default PersonCard;
