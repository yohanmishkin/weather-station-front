import HomePage from './pages/HomePage';
import PersonPage from './pages/PersonPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/people/:id">
        {({ match }) => <PersonPage id={match.params.id} />}
      </Route>
    </Switch>
  );
}

export default App;
