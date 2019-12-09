import GithubLogo from './github-64.png';
import QuestionMark from './question-mark.svg';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SourceCodeLinks = props => {
  return (
    <>
      {props.children}
      <img
        height="50"
        width="50"
        src={QuestionMark}
        alt=""
        style={{
          bottom: 0,
          right: 0,
          paddingBottom: '1.5rem',
          paddingRight: '1.5rem',
          position: 'fixed'
        }}
      />
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
