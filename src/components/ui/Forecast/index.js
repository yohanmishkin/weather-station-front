import PropTypes from 'prop-types';
import React from 'react';
import { animated, config, useTrail } from 'react-spring';
import styled from 'styled-components';
import withLoading from '../withLoading';

const Forecast = ({ forecasts }) => {
  const trail = useTrail(forecasts.length, {
    from: {
      transform: 'translateX(80px)',
      opacity: 0
    },
    to: { transform: 'translateX(0px)', opacity: 1 },
    config: config.stiff
  });

  return (
    <StyledDescriptionList>
      {trail.map((props, index) => (
        <animated.div className="row" key={index} style={props}>
          <dt>{forecasts[index].period}</dt>
          <dd>{forecasts[index].shortDescription}</dd>
        </animated.div>
      ))}
    </StyledDescriptionList>
  );
};

Forecast.propTypes = {
  forecasts: PropTypes.array.isRequired
};

const StyledDescriptionList = styled.dl`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-bottom: 4rem;
  min-height: 6rem;
  scroll-snap-type: x mandatory;
  scroll-padding: 50%;
  width: 100%;

  .row {
    background-color: white;
    border-radius: 0.5rem;
    margin-left: 2rem;
    min-width: 6rem;
    padding: 2rem;
    scroll-snap-align: center;
  }

  dt {
    font-size: 1.125rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  dd {
    margin-left: unset;
  }

  @media (min-width: 750px) {
    color: white;
    flex-direction: column;
    height: 80%;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-bottom: unset;
    margin-top: unset;
    scroll-snap-type: y proximity;
    width: 40%;

    .row {
      align-items: center;
      background-color: white;
      color: #000119;
      display: flex;
      font-size: 0.8rem;
      justify-content: space-between;
      letter-spacing: 2px;
      margin-bottom: 2rem;
      margin-right: 4rem;
      min-height: 4rem;
      padding: 1.5rem;
      padding-left: 2rem;
    }

    dt {
      font-weight: bolder;
      margin-bottom: unset;
      text-align: left;
    }
    dd {
      text-align: right;
      text-transform: uppercase;
    }
  }
`;

export default withLoading(Forecast, 'forecast-loading');
