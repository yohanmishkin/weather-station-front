import Forecast from '.';
import React from 'react';

export default {
  title: 'Forecast'
};

const forecasts = [
  { period: 'Tonight', shortDescription: 'Rain Showers Likely' },
  { period: 'Saturday', shortDescription: 'Showers And Thunderstorms' },
  { period: 'Saturday Night', shortDescription: 'Chance Rain Showers' },
  { period: 'Sunday', shortDescription: 'Mostly Sunny' },
  { period: 'Sunday Night', shortDescription: 'Clear' },
  { period: 'Monday', shortDescription: 'Sunny' },
  { period: 'Monday Night', shortDescription: 'Clear' },
  { period: 'Tuesday', shortDescription: 'Mostly Sunny' },
  { period: 'Tuesday Night', shortDescription: 'Chance Rain Showers' },
  { period: 'Wednesday', shortDescription: 'Chance Rain Showers' },
  { period: 'Wednesday Night', shortDescription: 'Chance Rain Showers' },
  {
    period: 'Thanksgiving Day',
    shortDescription: 'Slight Chance Rain Showers'
  },
  { period: 'Thursday Night', shortDescription: 'Slight Chance Rain Showers' },
  { period: 'Friday', shortDescription: 'Chance Rain Showers' }
];

export const basic = () => (
  <div style={{ paddingTop: '4rem' }}>
    <Forecast forecasts={forecasts} />
  </div>
);
