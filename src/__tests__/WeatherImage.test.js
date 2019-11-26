import '@testing-library/jest-dom/extend-expect';
import WeatherImage from '../components/ui/WeatherImage';
import { render } from '@testing-library/react';
import React from 'react';

describe('WeatherImage', () => {
  it('displays appromixate weather', () => {
    const weather = 'Most Cloud';

    const { getByTestId } = render(<WeatherImage weather={weather} />);

    expect(getByTestId('mostly-cloudy-svg')).toBeInTheDocument();
  });
});
