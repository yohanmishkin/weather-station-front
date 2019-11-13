import React, { useEffect, useState } from 'react';

export default function(props) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    const fetchPeople = async () => {
      let response = await fetch('/api/people');
      let json = await response.json();

      if (!isCancelled) {
        setPeople(json);
      }
    };

    fetchPeople();

    return () => {
      isCancelled = true;
    };
  }, []);

  return props.children({ people });
}
