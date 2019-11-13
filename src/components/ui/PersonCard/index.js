import React from 'react';
import { Link } from 'react-router-dom';

export default function({ person }) {
  return (
    <Link to={`/people/${person.id}`} className="card">
      <h2>{person.name}</h2>
      <h3>{person.temperature}</h3>
    </Link>
  );
}
