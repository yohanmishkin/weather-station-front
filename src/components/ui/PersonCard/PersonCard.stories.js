import PersonCard from '.';
import React from 'react';

export default {
  title: 'PersonCard'
};

export const basic = () => (
  <PersonCard
    person={{
      name: 'Charles',
      temperature: 58
    }}
  />
);
