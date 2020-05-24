import React, { useState } from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Animated from 'components/Animated/Animated';
import CloseIcon from 'components/Icons/CloseIcon';
import InteractiveIcon from 'components/InteractiveIcon/InteractiveIcon';

import { bounceInRight, bounceOutRight, mediaQuery } from 'styles/mixins';
import { primaryBlack, primaryWhite } from 'styles/variables';

const StyledMenu = styled.div`
  padding: 0.6rem 0.8rem;
  margin: 0.8rem;
  cursor: pointer;
  background-color: ${primaryWhite};
  border: 2px solid ${primaryBlack};
`;

const StyledOptions = styled(StyledMenu)`
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  button {
    display: none;
  }

  ${mediaQuery.md`
    flex-direction: row;

    button {
      margin-top: 4px;
      display: initial;
      position: initial;
    }
  `}

  a {
    text-decoration: none;
    margin: 0.2rem 0;
    color: ${primaryBlack};

    &:hover {
      transform: rotate(-6deg);

      &:after {
        content: '!'
      }
    }

    ${mediaQuery.md`
      margin: 0 0.6rem 0 0;
    `}
  }
`;

const Menu = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => setShowOptions((prevState) => !prevState);

  const menuOptions = [
    { label: 'About', value: 'about' },
    { label: 'Experience', value: 'experience' },
  ];

  const styling = {
    position: 'sticky',
    top: '0',
    float: 'right',
    display: 'flex',
    'flex-direction': 'column',
  };

  return (
    <>
      <Animated
        styling={styling}
        isRendered={showOptions}
        enterAnimation={bounceInRight}
        exitAnimation={bounceOutRight}
      >
        <>
          <StyledOptions>
            <>
              {menuOptions.map(({ label, value }) => (
                <AnchorLink
                  key={value}
                  to={`/#${value}`}
                >
                  {label}
                </AnchorLink>
              ))}
              <InteractiveIcon onClick={toggleOptions}>
                <CloseIcon />
              </InteractiveIcon>
            </>
          </StyledOptions>
        </>
      </Animated>
      <Animated
        styling={styling}
        isRendered={!showOptions}
        enterAnimation={bounceInRight}
        exitAnimation={bounceOutRight}
      >
        <StyledMenu onClick={toggleOptions}>Menu</StyledMenu>
      </Animated>
    </>
  );
};

export default Menu;
