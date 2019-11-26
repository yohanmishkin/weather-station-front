import '@testing-library/jest-dom/extend-expect';
import HomePage from '../components/pages/HomePage';
import { makeServer } from '../server';
import { fireEvent, render, waitForDomChange } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import seedrandom from 'seedrandom';

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
        <HomePage />
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
        <HomePage />
      </MemoryRouter>
    );

    await waitForDomChange();

    expect(getByTestId(`person-${person.id}`).getAttribute('href')).toBe(
      `/people/${person.id}`
    );
  });

  it('people appear in random order', async () => {
    seedrandom('global-override-seed', { global: true }); // overrides global Math.random implementation to make it seedable

    let [personA, personB, personC] = server.createList('person', 3);

    const { getByTestId } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    await waitForDomChange();

    expect(getByTestId('person-card-0')).toHaveTextContent(personC.name);
    expect(getByTestId('person-card-1')).toHaveTextContent(personA.name);
    expect(getByTestId('person-card-2')).toHaveTextContent(personB.name);
  });

  it('weather & forecast requests are cached for people', async () => {
    let person = server.create('person');

    const addAllMock = jest.fn();

    await renderWithMockedCache(addAllMock);
    await fireEvent.scroll(window);

    expect(addAllMock).toHaveBeenCalledWith([
      `/api/weather?lat=${person.lat}&long=${person.long}`,
      `/api/forecast?lat=${person.lat}&long=${person.long}`
    ]);
  });

  it('requests are cached as people enter the viewport', async () => {
    server.createList('person', 30);

    const cachedRequests = [];
    const addAllMock = jest.fn(requests => cachedRequests.push(requests));

    await renderWithMockedCache(addAllMock);

    expect(cachedRequests.length).not.toBe(30);

    await fireEvent.scroll(window);

    expect(cachedRequests.length).toBe(30);
  });

  const renderWithMockedCache = async addAllMock => {
    const openMock = jest
      .fn()
      .mockImplementation(() => ({ addAll: addAllMock }));

    global.window.caches = { open: openMock };

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    await waitForDomChange();
  };
});
