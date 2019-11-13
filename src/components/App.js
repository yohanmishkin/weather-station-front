import Container from './effects/Container';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Weather station</h1>
        <Container>
          {({ people }) =>
            people.map((person, index) => (
              <Link to={`/people/${person.id}`} key={index} className="card">
                <h2>{person.name}</h2>
                <h3>{person.temperature}</h3>
              </Link>
            ))
          }
        </Container>
      </Route>

      <Route path="/people/:id">
        <h1>hi</h1>
      </Route>
    </Switch>
  );
}

export default App;
