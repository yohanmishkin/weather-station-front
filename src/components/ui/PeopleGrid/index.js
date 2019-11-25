import PersonCard from '../PersonCard';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const PeopleGrid = ({ people }) => {
  return (
    <Container>
      <GridRow>
        {people.map((person, index) => (
          <GridItem key={index} data-testid={`person-card-${index}`}>
            <PersonCard person={person} />
          </GridItem>
        ))}
      </GridRow>
    </Container>
  );
};

PeopleGrid.propTypes = {
  people: PropTypes.array.isRequired
};

const Container = styled.div`
  margin: 0 auto;
`;

const GridRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const GridItem = styled.div`
  -ms-flex: auto;
  box-sizing: border-box;
  flex-basis: 20%;
  padding: 1rem;

  @media (max-width: 1333px) {
    flex-basis: 33.33%;
  }
  @media (max-width: 1073px) {
    flex-basis: 33.33%;
  }
  @media (max-width: 815px) {
    flex-basis: 50%;
  }
  @media (max-width: 555px) {
    flex-basis: 100%;
  }
`;

export default PeopleGrid;
