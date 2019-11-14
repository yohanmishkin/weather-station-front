import PeopleContainer from './effects/PeopleContainer';
import PersonContainer from './effects/PersonContainer';
import PeopleGrid from './ui/PeopleGrid';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Weather station</h1>

        <PeopleContainer>
          {({ people }) => <PeopleGrid people={people} />}
        </PeopleContainer>
      </Route>

      <Route path="/people/:id">
        {({ match }) => (
          <PersonContainer id={match.params.id}>
            {({ person }) => (
              <div>
                <Link to="/">Back to people</Link>
                <div>
                  <h1>{person.name}</h1>
                  <h2>{person.temperature}</h2>
                  <ol>
                    {person.forecasts.map((forecast, index) => (
                      <li key={index}>{forecast.shortDescription}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </PersonContainer>
        )}
      </Route>
    </Switch>
  );
}

export default App;
