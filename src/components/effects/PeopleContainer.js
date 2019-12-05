import config from '../../config';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PeopleContainer = props => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const fetchPeople = async () => {
      try {
        let response = await fetch(`${config.apiUrl}/api/people`);
        let json = await response.json();

        if (!isCancelled) {
          setPeople(json);
          setIsLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchPeople();

    return () => {
      isCancelled = true;
    };
  }, []);

  return props.children({ isLoading, people });
};

PeopleContainer.propTypes = {
  children: PropTypes.func.isRequired
};

export default PeopleContainer;
