import AnimatedLogo from '../ui/AnimatedLogo';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AboutPage = () => {
  return (
    <Layout>
      <SmallHeader>
        <AnimatedLogo height="48" width="48" />
        <h1 className="font-playfair">WeatherStation</h1>
      </SmallHeader>
      <div>
        <h3>A quick and dirty PWA project built with React & Elixir</h3>
        <p>
          Keep your eyes peeled for{' '}
          <img src={`${process.env.PUBLIC_URL}/icon-check-grape.svg`} alt="" />,
          these will appear with people whose weather and forecast data are
          cached for offline use.
        </p>

        <section className="links">
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

          <p>Cool components:</p>
          <ul>
            <li>
              <a href="https://github.com/yohanmishkin/weather-station-front/blob/3647ba0e5b56f8e36dd5a245921b6209541cd77e/src/components/ui/WeatherImage/levenshtein-weather.js">
                Levenshtein weather selection
              </a>
            </li>
            <li>
              <a href="https://github.com/yohanmishkin/weather-station-front/blob/3647ba0e5b56f8e36dd5a245921b6209541cd77e/src/components/effects/RandomizedList.js">
                Fisher Yates people randomization
              </a>
            </li>
            <li>
              <a href="https://github.com/yohanmishkin/weather-station-front/blob/3647ba0e5b56f8e36dd5a245921b6209541cd77e/src/components/effects/VisibilityDetector.js">
                Visibility detection
              </a>
            </li>
            <li>
              <a href="https://github.com/yohanmishkin/weather-station-front/blob/master/src/components/ui/Waves/index.js">
                Animated background waves
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
        </section>
      </div>
      <Link to="/" data-testid="close">
        <StyledImg height="32" width="32" src={closeImgPath} alt="" />
      </Link>
    </Layout>
  );
};

const closeImgPath = `${process.env.PUBLIC_URL}/close.svg`;

const Layout = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 1.25rem;
  margin-top: 5%;
  margin-left: 8%;
  margin-right: 8%;

  div {
    width: 100%;
  }

  p {
    margin-bottom: unset;
    width 100%;
  }

  @media (min-width: 750px) {
    margin-left: 29%;
    margin-right: 29%;
    margin-top: 5%;
  }
`;

const SmallHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-top: 1rem;
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
