import App from './App';
import { makeServer } from '../server';
import { render, waitForDomChange } from '@testing-library/react';
import React from 'react';

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

    const { getByText } = render(<App />);

    await waitForDomChange();

    expect(getByText(personA.name));
    expect(getByText(personB.name));
    expect(getByText(personC.name));
  });

  it.skip('displays the forecast for a person', () => {});
});
