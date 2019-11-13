import App from './App';
import { makeServer } from './server';
import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

describe('weather station', () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('displays the weather for multiple people', () => {
    server.createList('person', 3);

    const { getAllByTestId } = render(<App />);

    expect(getAllByTestId('person').length).toBe(3);
  });

  it.skip('displays the forecast for a person', () => {});
});
