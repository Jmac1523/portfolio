import React from 'react';
import GlobalLayout from 'components/GlobalLayout/GlobalLayout';
import Menu from 'components/Menu/Menu';
import Landing from 'sections/Landing';
import About from 'sections/About';
import Experience from 'sections/Experience';

export default () => (
  <>
    <GlobalLayout />
    <Menu />
    <Landing />
    <About />
    <Experience />
  </>
);
