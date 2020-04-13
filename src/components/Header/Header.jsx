import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  height: 100px;
  background-color: red;
`;

export default () => (
  <Header data-testid="header">
    <p>Header content goes here</p>
  </Header>
);
