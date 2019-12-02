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

const withConstrainedWidth = (WrappedComponent, ...props) => {
  return () => (
    <div style={{ width: '400px' }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export const basic = withConstrainedWidth(() => (
  <PersonCard person={charles} />
));

export const cached = withConstrainedWidth(() => (
  <PersonCard cached={true} person={charles} />
));
