import React from 'react';
import { func, node } from 'prop-types';
import styled from 'styled-components';

const StyledInteractiveIcon = styled.button`
  background-color: transparent;
  outline: 0;
  border: none;
  cursor: pointer;
`;

const InteractiveIcon = ({ children, onClick }) => {
  return (
    <StyledInteractiveIcon onClick={onClick}>
      {children}
    </StyledInteractiveIcon>
  );
};

InteractiveIcon.propTypes = {
  onClick: func.isRequired,
  children: node.isRequired,
};

export default InteractiveIcon;
