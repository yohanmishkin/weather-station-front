import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  text-align: center;
`;

const Name = styled.h2`
  color: green;
`;

const Temperature = styled.h3`
  color: green;
`;

const PersonCard = ({ person }) => {
  return (
    <StyledLink to={`/people/${person.id}`}>
      <Name>{person.name}</Name>
      <Temperature>{person.temperature}</Temperature>
    </StyledLink>
  );
};

export default PersonCard;
