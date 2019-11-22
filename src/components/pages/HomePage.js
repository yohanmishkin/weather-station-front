import PeopleContainer from '../effects/PeopleContainer';
import PeopleGrid from '../ui/PeopleGrid';
import React from 'react';
import styled from 'styled-components';

export default function() {
  return (
    <Layout>
      <h1 className="font-playfair">WeatherStation</h1>

      <PeopleContainer>
        {({ people }) => <PeopleGrid people={people} />}
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
