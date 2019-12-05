import CacheCount from '../contexts/CacheCount';
import PeopleContainer from '../effects/PeopleContainer';
import RandomizedList from '../effects/RandomizedList';
import Header from '../ui/Header';
import PeopleGrid from '../ui/PeopleGrid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const HomePage = () => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = ({ children }) => {
  const [cacheCount, setCacheCount] = useState(0);

  return (
    <CacheCount.Provider
      value={{
        count: cacheCount,
        incrementCount: () => setCacheCount(oldCount => oldCount + 1)
      }}
    >
      {children}
    </CacheCount.Provider>
  );
};

Container.propTypes = {
  children: PropTypes.array.isRequired
};

export default HomePage;
