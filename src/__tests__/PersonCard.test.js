import '@testing-library/jest-dom/extend-expect';
import PersonCard from '../components/ui/PersonCard';
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('PersonCard', () => {
  it('displays checkmark when cached', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <PersonCard cached={true} person={{}} />
      </MemoryRouter>
    );

    expect(getByAltText('weather is cached')).toBeInTheDocument();
  });
});
