import React from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const About = styled.section`
  background-color: red;
  padding: 80px;
  position: relative;
`;

export default () => (
  <About id="about">
    <SectionTitle>About</SectionTitle>
    <h1>I am a h1 heading</h1>
    <h2>I am an h2 heading</h2>
    <h3>I am an h3 heading</h3>
    <h4>I am an h4 heading</h4>
    <p>I am some text I am some text I am some text</p>
  </About>
);
