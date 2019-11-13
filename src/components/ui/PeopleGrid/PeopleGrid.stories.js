import PeopleGrid from '.';
import { makeServer } from '../../../server';
import React from 'react';

export default {
  title: 'PeopleGrid'
};

let server = makeServer({ environment: 'development' });

const people = server.createList('person', 15);

export const basic = () => <PeopleGrid people={people} />;
