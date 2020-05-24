import React from 'react';
import styled from 'styled-components';

import { primaryWhite, primaryBlack } from 'styles/variables';

const StyledPageTitle = styled.div`
  position: absolute;
  top: 0;
  left: -18px;
  font-family: ComicNeueBoldItalic;
  background-color: ${primaryWhite};
  border: 2px solid ${primaryBlack};

  padding: 12px 24px 12px 34px;
  transform: skew(-20deg);
`;

const SectionTitle = ({ children }) => {
  return (
    <>
      <StyledPageTitle>
        <h1>
          {children}
          ...
        </h1>
      </StyledPageTitle>
    </>
  );
};

export default SectionTitle;
