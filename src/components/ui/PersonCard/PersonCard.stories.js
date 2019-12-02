import PersonCard from '.';
import React from 'react';

export default {
  title: 'PersonCard'
};

const charles = {
  name: 'Charles',
  imageUrl: 'http://placecorgi.com/600/600',
  temperature: 58
};

export const basic = () => <PersonCard person={charles} />;

export const cached = () => <PersonCard cached={true} person={charles} />;
