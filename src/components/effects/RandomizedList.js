import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const RandomizedList = props => {
  const [shuffledItems, setShuffledItems] = useState([]);

  useEffect(() => {
    setShuffledItems(fisherYatesShuffle(props.items));
  }, []);

  return props.children({ items: shuffledItems });
};

RandomizedList.propTypes = {
  children: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function fisherYatesShuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default RandomizedList;
