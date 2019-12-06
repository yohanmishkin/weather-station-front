import GithubLogo from './github-64.png';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SourceCodeLinks = props => {
  return (
    <>
      {props.children}
      <StickyFooter>
        <img height="16" width="16" src={GithubLogo} alt="github logo" />
        <a href="https://github.com/yohanmishkin/weather-station-front">
          front
        </a>
        <a href="https://github.com/yohanmishkin/weather-station-back">back</a>
      </StickyFooter>
    </>
  );
};

SourceCodeLinks.propTypes = {
  children: PropTypes.any.isRequired
};

const StickyFooter = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  height: 2rem;
  justify-content: flex-end;
  opacity: 0.5;
  padding-right: 2rem;
  position: fixed;
  width: 100%;

  a {
    color: black;
    font-size: 0.85rem;
    margin-right: 0.75rem;
  }

  img {
    margin-right: 0.75rem;
  }
`;

export default SourceCodeLinks;
