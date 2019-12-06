import SourceCodeLinks from './ui/SourceCodeLinks';
import { Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const PersonPage = lazy(() => import('./pages/PersonPage'));

function App() {
  return (
    <SourceCodeLinks>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/people/:id">
            {({ match }) => <PersonPage id={match.params.id} />}
          </Route>
        </Switch>
      </Suspense>
    </SourceCodeLinks>
  );
}

export default App;
