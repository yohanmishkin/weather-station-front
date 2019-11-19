import config from '../../config';
import { useEffect, useState } from 'react';

export default function(props) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    const fetchPeople = async () => {
      let response = await fetch(`${config.apiUrl}/api/people`);
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
