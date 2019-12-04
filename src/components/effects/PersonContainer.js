import config from '../../config';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PersonContainer = props => {
  const [forecasts, setForecasts] = useState([]);
  const [person, setPerson] = useState({});
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      try {
        let personResponse = await fetch(
          `${config.apiUrl}/api/people/${props.id}`
        );

        let personJson = await personResponse.json();

        let weatherFetch = fetch(
          `${config.apiUrl}/api/weather?lat=${personJson.lat}&long=${personJson.long}`
        );

        let forecastFetch = fetch(
          `${config.apiUrl}/api/forecast?lat=${personJson.lat}&long=${personJson.long}`
        );

        let [weatherResponse, forecastResponse] = await Promise.all([
          weatherFetch,
          forecastFetch
        ]);

        let [weatherJson, forecastsJson] = await Promise.all([
          weatherResponse.json(),
          forecastResponse.json()
        ]);

        if (!isCancelled) {
          setPerson(personJson);
          setWeather(weatherJson);
          setForecasts(forecastsJson);
          setIsLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();

    return function cleanUp() {
      isCancelled = true;
    };
  }, [props.id]);

  return props.children({ isLoading, forecasts, person, weather });
};

PersonContainer.propTypes = {
  children: PropTypes.func.isRequired
};

export default PersonContainer;
