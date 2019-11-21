import WeatherImage from '../components/ui/WeatherImage';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

describe('WeatherImage', () => {
  it('displays thunderstorms', () => {
    const weather = 'thunderstorms';

    const { queryByAltText } = render(<WeatherImage weather={weather} />);

    expect(queryByAltText(weather)).toBeInTheDocument();
    expect(queryByAltText(weather)).toHaveAttribute(
      'src',
      `/icons/${weather}.svg`
    );
  });
});
