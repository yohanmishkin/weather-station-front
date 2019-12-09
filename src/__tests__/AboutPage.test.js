import '@testing-library/jest-dom/extend-expect';
import AboutPage from '../components/pages/AboutPage';
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('AboutPage', () => {
  it('has a link to the about page', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    expect(getByTestId('close').getAttribute('href')).toBe('/');
  });
});
