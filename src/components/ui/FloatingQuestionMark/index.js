import QuestionMark from './question-mark.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FloatingQuestionMark = () => {
  return (
    <Link to="/about" data-testid="question-mark">
      <StyledImg height="50" width="50" src={QuestionMark} alt="" />
    </Link>
  );
};

const StyledImg = styled.img`
  bottom: 0;
  padding-bottom: 1.5rem;
  padding-right: 1.5rem;
  position: fixed;
  right: 0;
`;

export default FloatingQuestionMark;
