import React from 'react';
import styled, { css } from 'styled-components';
import Title from 'assets/Title';
import PortraitLeft from 'assets/PortraitLeft';
import PortraitUp from 'assets/PortraitUp';
import useMediaQuery from 'hooks/useMediaQuery';

const Landing = styled.section`
  display: flex;
  padding: 20px;

  ${({ isSmallViewport }) => isSmallViewport
    && css`
      flex-direction: column;
    `}
`;

export default () => {
  // NOTE: TODO - Global theme or something?
  const isSmallViewport = useMediaQuery('(max-width: 800px)');

  return (
    <Landing isSmallViewport={isSmallViewport}>
      <p>Landing goes here</p>
      {/* <Title />
      {isSmallViewport ? <PortraitUp /> : <PortraitLeft />} */}
    </Landing>
  );
};
