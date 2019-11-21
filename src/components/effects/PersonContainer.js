import config from '../../config';
import { useEffect, useState } from 'react';

export default function(props) {
  const [forecasts, setForecasts] = useState([]);
  const [person, setPerson] = useState(createDefaultPerson());
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      let personResponse = await fetch(
        `${config.apiUrl}/api/people/${props.id}`
      );

      let personJson = await personResponse.json();

      let weatherFetch = fetch(
        `${config.apiUrl}/api/weather?lat=${personJson.lat}&long=${personJson.long}`
      );

      let forecastsFetch = fetch(
        `${config.apiUrl}/api/forecast?lat=${personJson.lat}&long=${personJson.long}`
      );

      let [weatherResponse, forecastResponse] = await Promise.all([
        weatherFetch,
        forecastsFetch
      ]);

      let weatherJson = await weatherResponse.json();
      let forecastsJson = await forecastResponse.json();

      if (!isCancelled) {
        setPerson(personJson);
        setWeather(weatherJson);
        setForecasts(forecastsJson);
        setIsLoading(false);
      }
    };

    fetchData();

    return function cleanUp() {
      isCancelled = true;
    };
  }, [props.id]);

  return props.children({ isLoading, forecasts, person, weather });
}

const createDefaultPerson = () => ({ forecasts: [] });
