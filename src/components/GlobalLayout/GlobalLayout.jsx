import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { primaryBlack } from 'styles/variables';

const GlobalLayout = createGlobalStyle`
  @font-face {
    font-family: 'ComicNeueLight';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Comic Neue Light'), local('ComicNeue-Light'), url(https://fonts.gstatic.com/s/comicneue/v1/4UaErEJDsxBrF37olUeD_wHL8pxULilENlY.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'ComicNeueRegular';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Comic Neue Regular'), local('ComicNeue-Regular'), url(https://fonts.gstatic.com/s/comicneue/v1/4UaHrEJDsxBrF37olUeD96rp57F2IwM.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'ComicNeueBold';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Comic Neue Bold'), local('ComicNeue-Bold'), url(https://fonts.gstatic.com/s/comicneue/v1/4UaErEJDsxBrF37olUeD_xHM8pxULilENlY.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'ComicNeueBoldItalic';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: local('Comic Neue Bold Italic'), local('ComicNeue-BoldItalic'), url(https://fonts.gstatic.com/s/comicneue/v1/4UaarEJDsxBrF37olUeD96_RXp5kLCNDFFQg_A.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  html {
    font-family: ComicNeueRegular, sans-serif;
    font-size: calc(12px + 0.8vw);
    color: ${primaryBlack};
    scroll-behavior: smooth;
    max-width: 1980px;
    margin: 0 auto;
    position: relative;
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
