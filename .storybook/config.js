import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());

const BackgroundColorDecorator = storyFn => (
  <div
    style={{
      backgroundColor: '#fff1e8'
    }}
  >
    {storyFn()}
  </div>
);

addDecorator(BackgroundColorDecorator);

configure(require.context('../src', true, /\.stories\.js$/), module);
