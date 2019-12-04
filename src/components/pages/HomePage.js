import PeopleContainer from '../effects/PeopleContainer';
import RandomizedList from '../effects/RandomizedList';
import Header from '../ui/Header';
import PeopleGrid from '../ui/PeopleGrid';
import React from 'react';

export default function() {
  return (
    <div>
      <Header />

      <PeopleContainer>
        {({ people }) => (
          <RandomizedList items={people}>
            {({ items: randomizedPeople }) => (
              <PeopleGrid people={randomizedPeople} />
            )}
          </RandomizedList>
        )}
      </PeopleContainer>
    </div>
  );
}
