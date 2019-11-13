import React from 'react';
import Container from './effects/Container';

function App() {
  return (
    <Container>
      {({ people }) =>
        people.map((person, index) => (
          <button data-testid="person" key={index}></button>
        ))
      }
    </Container>
  );
}

export default App;
