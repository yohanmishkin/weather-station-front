import React, { useEffect, useState } from 'react';

const Container = props => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      let response = await fetch('/api/people');
      let json = await response.json();
      setPeople(json);
    };

    fetchPeople();
  });

  return props.children(people);
};

export default Container;
