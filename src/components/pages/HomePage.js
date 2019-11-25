import PeopleContainer from '../effects/PeopleContainer';
import RandomizedList from '../effects/RandomizedList';
import PeopleGrid from '../ui/PeopleGrid';
import React from 'react';
import styled from 'styled-components';

export default function() {
  return (
    <Layout>
      <h1 className="font-playfair">WeatherStation</h1>

      <PeopleContainer>
        {({ people }) => (
          <RandomizedList items={people}>
            {({ items: randomizedPeople }) => (
              <PeopleGrid people={randomizedPeople} />
            )}
          </RandomizedList>
        )}
      </PeopleContainer>
    </Layout>
  );
}

const Layout = styled.div`
  h1 {
    text-align: center;
    @media (min-width: 750px) {
      margin-right: 3rem;
      text-align: right;
    }
  }
`;
