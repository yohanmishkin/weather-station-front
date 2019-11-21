import config from '../../config';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PeopleContainer = props => {
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
};

PeopleContainer.propTypes = {
  children: PropTypes.func.isRequired
};

export default PeopleContainer;
