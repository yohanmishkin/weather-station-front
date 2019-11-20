import PeopleContainer from '../effects/PeopleContainer';
import PeopleGrid from '../ui/PeopleGrid';
import React from 'react';

export default function() {
  return (
    <>
      <h1 className="font-playfair">WeatherStation</h1>

      <PeopleContainer>
        {({ people }) => <PeopleGrid people={people} />}
      </PeopleContainer>
    </>
  );
}
