import PersonCard from '../PersonCard';
import PropTypes from 'prop-types';
import PersonCache from '../../effects/PersonCache';
import VisibilityDetector from '../../effects/VisibilityDetector';
import React from 'react';
import styled from 'styled-components';

const PeopleGrid = ({ people }) => {
  return (
    <Layout>
      <GridRow>
        {people.map((person, index) => (
          <GridItem key={person.id} data-testid={`person-card-${index}`}>
            <PersonCache person={person}>
              {({ alreadyCached, cachePerson }) => (
                <VisibilityDetector onShown={cachePerson}>
                  <PersonCard cached={alreadyCached} person={person} />
                </VisibilityDetector>
              )}
            </PersonCache>
          </GridItem>
        ))}
      </GridRow>
    </Layout>
  );
};

PeopleGrid.propTypes = {
  people: PropTypes.array.isRequired
};

const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
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
