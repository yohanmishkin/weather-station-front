import HomePage from './pages/HomePage';
import PersonPage from './pages/PersonPage';
import SourceCodeLinks from './ui/SourceCodeLinks';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <SourceCodeLinks>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/people/:id">
          {({ match }) => <PersonPage id={match.params.id} />}
        </Route>
      </Switch>
    </SourceCodeLinks>
  );
}

export default App;
