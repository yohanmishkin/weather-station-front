import config from '../../config';
import { useEffect, useState } from 'react';

export default function(props) {
  const [person, setPerson] = useState(createDefaultPerson());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const fetchPerson = async () => {
      let response = await fetch(`${config.apiUrl}/api/people/${props.id}`);
      let json = await response.json();

      if (!isCancelled) {
        setPerson(json);
        setIsLoading(false);
      }
    };

    fetchPerson();

    return function cleanUp() {
      isCancelled = true;
      setIsLoading(false);
    };
  }, [props.id]);

  return props.children({ isLoading, person });
}

const createDefaultPerson = () => ({ forecasts: [] });
