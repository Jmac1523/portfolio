import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalLayout = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  section {
    height: 100vh;
    width: 100%;
  }

  svg {
    height: 100%;
  }
`;

export default () => <GlobalLayout />;
