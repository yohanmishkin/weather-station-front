import AnimatedCheckMark from './AnimatedCheckMark';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const PersonCard = ({ cached, person }) => {
  const [hovered, setHovered] = useState(false);
  const props = useSpring({
    config: { mass: 1, tension: 500, friction: 25 },
    transform: hovered ? 'scale(1.01)' : 'scale(1)'
  });

  return (
    <StyledLink to={`/people/${person.id}`} data-testid={`person-${person.id}`}>
      <CacheableImageContainer
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        style={props}
      >
        {cached ? <AnimatedCheckMark /> : null}
        <img
          alt={`${person.name}'s headshot`}
          className="headshot"
          src={person.imageUrl}
        />
      </CacheableImageContainer>
      <h2 className="font-playfair">{person.name}</h2>
    </StyledLink>
  );
};

PersonCard.propTypes = {
  cached: PropTypes.bool,
  person: PropTypes.object.isRequired
};

const StyledLink = styled(Link)`
  color: inherit;
  display: block;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.3s;

  :hover {
    color: #675baa;
  }
`;

const CacheableImageContainer = styled(animated.div)`
  position: relative;

  .headshot {
    border-radius: 0.35rem;
    margin-top: 0.4rem;
    width: 100%;
  }

  .is-cached {
    position: absolute;
    bottom: -0.45rem;
    right: -0.75rem;
  }
`;

export default PersonCard;
