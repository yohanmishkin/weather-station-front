import React from 'react';
import styled from 'styled-components';

const BackgroundWave = () => {
  return <Wave />;
};

const Wave = styled.div`
  background-color: white;
  border-top-left-radius: 80%;
  border-top-right-radius: 40%;
  bottom: 0;
  height: 25%;
  position: fixed;
  width: 100%;
  z-index: -10;
`;

export default BackgroundWave;
