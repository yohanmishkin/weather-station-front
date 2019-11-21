import App from '../components/App';
import { makeServer } from '../server';
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

  it('displays the weather for multiple people', async () => {
    let [personA, personB, personC] = server.createList('person', 3);

    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitForDomChange();

    expect(getByText(personA.name)).toBeDefined();
    expect(getByText(personB.name)).toBeDefined();
    expect(getByText(personC.name)).toBeDefined();

    expect(getByAltText(`${personA.name}'s headshot`)).toBeDefined();
    expect(getByAltText(`${personB.name}'s headshot`)).toBeDefined();
    expect(getByAltText(`${personC.name}'s headshot`)).toBeDefined();
  });

  it('home page has links to a person page', async () => {
    let person = server.create('person');

    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitForDomChange();

    expect(getByTestId(`person-${person.id}`).getAttribute('href')).toBe(
      `/people/${person.id}`
    );
  });

  it('displays the forecasts for a person', async () => {
    let person = server.create('person');

    const { getByAltText, getByText } = render(
      <MemoryRouter initialEntries={[`/people/${person.id}`]}>
        <App />
      </MemoryRouter>
    );

    await waitForDomChange();

    expect(getByAltText(`${person.name}'s headshot`)).toBeDefined();
    expect(getByText(person.name)).toBeDefined();
    expect(getByText(`${person.currentTemperature}`)).toBeDefined();
    expect(getByAltText(`${person.currentWeather}`)).toBeDefined();
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
      <MemoryRouter initialEntries={[`/people/${person.id}`]}>
        <App />
      </MemoryRouter>
    );

    expect(getByText('Back to people').getAttribute('href')).toBe('/');
  });
});
