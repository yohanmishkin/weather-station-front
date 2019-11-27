import '@testing-library/jest-dom/extend-expect';
import HomePage from '../components/pages/HomePage';
import { makeServer } from '../server';
import {
  fireEvent,
  render,
  wait,
  waitForDomChange
} from '@testing-library/react';
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

    const addAll = jest.fn();
    const matchAll = jest.fn(() => []);

    await renderWithMockedCache(addAll, matchAll);
    await fireEvent.scroll(window);
    await wait(() => isScrolledToBottom);

    expect(addAll).toHaveBeenCalledWith([
      `/api/weather?lat=${person.lat}&long=${person.long}`,
      `/api/forecast?lat=${person.lat}&long=${person.long}`
    ]);
  });

  it('requests are cached as people enter the viewport', async () => {
    server.createList('person', 30);

    const cachedRequests = [];
    const addAll = jest.fn(requests => cachedRequests.push(requests));
    const matchAll = jest.fn(() => []);

    await renderWithMockedCache(addAll, matchAll);

    expect(cachedRequests.length).toBe(0);

    await fireEvent.scroll(window);
    await wait(() => isScrolledToBottom);

    expect(cachedRequests.length).toBe(30);
  });

  it('does not cache requests that have already been cached', async () => {
    server.create('person');

    const cachedRequests = Array(1);
    const addAll = jest.fn();
    const matchAll = jest.fn(() => Promise.resolve(cachedRequests));

    await renderWithMockedCache(addAll, matchAll);
    await fireEvent.scroll(window);

    expect(matchAll).toHaveBeenCalledTimes(2);

    await fireEvent.scroll(window);

    expect(addAll).toHaveBeenCalledTimes(0);
  });

  const renderWithMockedCache = async function(addAllMock, matchAllMock) {
    const openMock = jest.fn().mockImplementation(() => ({
      addAll: addAllMock,
      matchAll: matchAllMock
    }));

    global.window.caches = { open: openMock };

    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    await waitForDomChange();

    return container;
  };

  const isScrolledToBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight;
});
