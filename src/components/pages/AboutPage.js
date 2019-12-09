import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AboutPage = () => {
  return (
    <Layout>
      <h1 className="font-playfair">WeatherStation</h1>
      <div>
        <h3>A quick and dirty PWA project built with React & Elixir</h3>
        <p>
          Keep your eyes peeled for{' '}
          <img src={`${process.env.PUBLIC_URL}/icon-check-grape.svg`} alt="" />,
          these will appear with people whose weather and forecast data are
          cached for offline use.
        </p>

        <p>Source code:</p>
        <ul>
          <li>
            <a href="https://github.com/yohanmishkin/weather-station-front">
              React PWA
            </a>
          </li>
          <li>
            <a href="https://github.com/yohanmishkin/weather-station-back">
              Elixir/Phoenix API
            </a>
          </li>
        </ul>

        <p>Data provided by:</p>
        <ul>
          <li>
            <a href="https://dockyard.com/team">DockYard</a>
          </li>
          <li>
            <a href="https://www.weather.gov/documentation/services-web-api">
              National Weather Service
            </a>
          </li>
        </ul>
      </div>
      <Link to="/" data-testid="close">
        <StyledImg height="32" width="32" src={closeImgPath} alt="" />
      </Link>
    </Layout>
  );
};

const closeImgPath = `${process.env.PUBLIC_URL}/close.svg`;

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 1.25rem;
  margin-top: 20%;
  margin-left: 8%;
  margin-right: 8%;

  div {
    width: 100%;
  }
  h1, h3 {
    text-align: center;
  }

  p {
    margin-bottom: unset;
    width 100%;
  }

  @media (min-width: 750px) {
    margin-left: 25%;
    margin-right: 25%;
  margin-top: 10%;
  }
`;

const StyledImg = styled.img`
  bottom: 0;
  padding-bottom: 1.5rem;
  padding-right: 1.5rem;
  position: fixed;
  right: 0;

  @media (min-width: 750px) {
    bottom: unset;
    padding-top: 1.5rem;
    top: 0;
  }
`;

export default AboutPage;
