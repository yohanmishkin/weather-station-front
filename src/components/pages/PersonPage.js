import PersonContainer from '../effects/PersonContainer';
import PersonProfile from '../ui/PersonProfile';
import React from 'react';

export default function(props) {
  return (
    <PersonContainer id={props.id}>
      {({ person }) => <PersonProfile person={person} />}
    </PersonContainer>
  );
}
