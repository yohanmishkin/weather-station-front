import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  bottom: 0;
  position: absolute;
  height: 70%;
  width: 100%;
  z-index: -10;

  @media (min-width: 750px) {
    height: 30%;
  }
`;

const WavesContainer = styled.div`
  height: 100%;
  position: relative;
  overflow-x: hidden;
`;

const Wave = styled.div`
  bottom: 0;
  position: absolute;
  width: 120%;
`;

const WaveOne = styled(Wave)`
  background: #a199ce;
  border-top-right-radius: 100%;
  height: 80%;
`;

const WaveTwo = styled(Wave)`
  background: #8b80c8;
  border-top-left-radius: 10%;
  border-top-right-radius: 100%;
  height: 70%;
`;

const WaveThree = styled(Wave)`
  background: #675baa;
  border-top-left-radius: 20%;
  border-top-right-radius: 90%;
  height: 60%;
`;

const Curve = () => {
  return (
    <Layout>
      <WavesContainer>
        <WaveOne />
        <WaveTwo />
        <WaveThree />
      </WavesContainer>
    </Layout>
  );
};

export default Curve;
