import React from 'react';
import Container from './effects/Container';

function App() {
  return (
    <div>
      <h1>Weather station</h1>
      <Container>
        {({ people }) =>
          people.map((person, index) => (
            <button key={index}>
              <h2>{person.name}</h2>
              <h3>{person.temperature}</h3>
            </button>
          ))
        }
      </Container>
    </div>
  );
}

export default App;
