import PersonPage from '../components/pages/PersonPage';
import { makeServer } from '../server';
import '@testing-library/jest-dom/extend-expect';
import { render, waitForDomChange } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('weather station', () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('displays the forecasts for a person', async () => {
    const person = server.create('person');
    // GET /api/people/:id
    // GET /api/weather/:lat,:long
    // GET /api/forecast/:lat,:long

    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <PersonPage id={person.id} />
      </MemoryRouter>
    );

    await waitForDomChange();

    expect(getByAltText(`${person.name}'s headshot`)).toBeDefined();
    expect(getByText(person.name)).toBeDefined();
    expect(getByText(`${person.currentTemperature}`)).toBeDefined();
    expect(getByAltText(person.currentWeather)).toBeDefined();
    expect(getByText(person.forecasts[0].period)).toBeDefined();
    expect(getByText(person.forecasts[1].period)).toBeDefined();
    expect(getByText(person.forecasts[2].period)).toBeDefined();
    expect(getByText(person.forecasts[0].shortDescription)).toBeDefined();
    expect(getByText(person.forecasts[1].shortDescription)).toBeDefined();
    expect(getByText(person.forecasts[2].shortDescription)).toBeDefined();
  });

  it('person page has a link back to home page', async () => {
    let person = server.create('person');

    const { getByText } = render(
      <MemoryRouter>
        <PersonPage id={person.id} />
      </MemoryRouter>
    );

    expect(getByText('Back to people').getAttribute('href')).toBe('/');
  });

  it('it shows loading spinner while waiting for weather to load', () => {
    const person = server.create('person');

    const { queryByTestId } = render(
      <MemoryRouter>
        <PersonPage id={person.id} />
      </MemoryRouter>
    );

    expect(queryByTestId('weather-loading')).toBeInTheDocument();
  });

  it('it shows loading spinner while waiting for forecast to load', () => {
    const person = server.create('person');

    const { queryByTestId } = render(
      <MemoryRouter>
        <PersonPage id={person.id} />
      </MemoryRouter>
    );

    expect(queryByTestId('forecast-loading')).toBeInTheDocument();
  });
});
