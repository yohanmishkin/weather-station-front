import App from './App';
import { makeServer } from '../server';
import { fireEvent, render, waitForDomChange } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';

describe('weather station', () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('displays the weather for multiple people', async () => {
    let [personA, personB, personC] = server.createList('person', 3);

    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    await waitForDomChange();

    expect(getByText(personA.name));
    expect(getByText(personB.name));
    expect(getByText(personC.name));

    expect(getByText(`${personA.temperature}`));
    expect(getByText(`${personB.temperature}`));
    expect(getByText(`${personC.temperature}`));
  });

  it(`can navigate to a person's page`, async () => {
    let person = server.create('person');

    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    await waitForDomChange();

    fireEvent.click(getByText(person.name));

    expect(history.location.pathname).toBe(`/people/${person.id}`);
  });

  it('displays the forecasts for a person', async () => {
    let person = server.create('person');

    const { getByText } = render(
      <MemoryRouter initialEntries={[`/people/${person.id}`]}>
        <App />
      </MemoryRouter>
    );

    await waitForDomChange();

    expect(getByText(person.name)).toBeDefined();
    expect(getByText(`${person.temperature}`)).toBeDefined();
    expect(getByText(person.forecasts[0].shortDescription)).toBeDefined();
    expect(getByText(person.forecasts[1].shortDescription)).toBeDefined();
    expect(getByText(person.forecasts[2].shortDescription)).toBeDefined();
  });
});
