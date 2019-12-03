import CheckMark from './icon-check-grape.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';

const PersonCard = ({ cached, person }) => {
  return (
    <StyledLink to={`/people/${person.id}`} data-testid={`person-${person.id}`}>
      {cached ? (
        <Spring
          from={{ transform: 'scale(0.1)' }}
          to={{ transform: 'scale(1)' }}
          config={{ mass: 1, tension: 400, friction: 18 }}
        >
          {props => (
            <img
              alt={`${person.name}'s weather is cached`}
              className="is-cached"
              src={CheckMark}
              style={props}
            />
          )}
        </Spring>
      ) : null}
      <img
        alt={`${person.name}'s headshot`}
        className="headshot"
        src={person.imageUrl}
      />
      <h2 className="font-playfair">{person.name}</h2>
    </StyledLink>
  );
};

PersonCard.propTypes = {
  cached: PropTypes.bool,
  person: PropTypes.object.isRequired
};

const StyledLink = styled(Link)`
  border: transparent solid 0.2rem;
  color: inherit;
  display: block;
  margin-bottom: 1rem;
  padding: 2rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s;

  :hover {
    border-bottom: solid 0.2rem;
    color: #675baa;
  }

  .headshot {
    border-radius: 0.35rem;
    width: 100%;
  }

  .is-cached {
    position: absolute;
    bottom: 4.6875rem;
    right: 1.25rem;
  }
`;

export default PersonCard;
