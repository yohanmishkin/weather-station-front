import PersonContainer from '../effects/PersonContainer';
import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
  return (
    <PersonContainer id={props.id}>
      {({ person }) => (
        <div>
          <Link to="/">Back to people</Link>
          <div>
            <h1 className="font-playfair">{person.name}</h1>
            <h2>{person.temperature}</h2>
            <ol>
              {person.forecasts.map((forecast, index) => (
                <li key={index}>{forecast.shortDescription}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </PersonContainer>
  );
}
