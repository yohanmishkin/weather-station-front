import { useEffect, useState } from 'react';

export default function(props) {
  const [person, setPerson] = useState({});

  useEffect(() => {
    let isCancelled = false;

    const fetchPerson = async () => {
      let response = await fetch(`/api/people/${props.id}`);
      let json = await response.json();

      if (!isCancelled) {
        setPerson(json);
      }
    };

    fetchPerson();

    return () => {
      isCancelled = true;
    };
  }, []);

  return props.children({ person });
}
