import App from '../components/App';
import { makeServer } from '../server';
import { render, waitForDomChange } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('Home page', () => {
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
});
