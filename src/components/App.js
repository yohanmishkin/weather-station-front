import PeopleContainer from './effects/PeopleContainer';
import PersonContainer from './effects/PersonContainer';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Weather station</h1>
        <PeopleContainer>
          {({ people }) =>
            people.map((person, index) => (
              <Link to={`/people/${person.id}`} key={index} className="card">
                <h2>{person.name}</h2>
                <h3>{person.temperature}</h3>
              </Link>
            ))
          }
        </PeopleContainer>
      </Route>

      <Route path="/people/:id">
        {({ match }) => (
          <PersonContainer id={match.params.id}>
            {({ person }) => (
              <div>
                <h1>{person.name}</h1>
                <h2>{person.temperature}</h2>
                <ol>
                  {person.forecasts.map((forecast, index) => (
                    <li key={index}>{forecast.shortDescription}</li>
                  ))}
                </ol>
              </div>
            )}
          </PersonContainer>
        )}
      </Route>
    </Switch>
  );
}

export default App;
