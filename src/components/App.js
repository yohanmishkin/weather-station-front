import HomePage from './pages/HomePage';
import PersonPage from './pages/PersonPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

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
