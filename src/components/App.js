import { Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const PersonPage = lazy(() => import('./pages/PersonPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/about">
          <AboutPage />
        </Route>

        <Route path="/people/:id">
          {({ match }) => <PersonPage id={match.params.id} />}
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
