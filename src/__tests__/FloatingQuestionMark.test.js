import '@testing-library/jest-dom/extend-expect';
import FloatingQuestionMark from '../components/ui/FloatingQuestionMark';
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('FloatingQuestionMark', () => {
  it('has a link to the about page', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <FloatingQuestionMark />
      </MemoryRouter>
    );

    expect(getByTestId('question-mark').getAttribute('href')).toBe('/about');
  });
});
