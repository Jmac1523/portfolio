import React, { useState, useEffect } from 'react';
import {
  array, bool, func, node, shape, string,
} from 'prop-types';
import styled, { css } from 'styled-components';

const StyledAnimation = styled.div`
  z-index: 3;
  animation-duration: 1s;
  animation-name: ${({
    isRendered,
    exitAnimation,
    enterAnimation,
  }) => (isRendered ? css`${enterAnimation}` : css`${exitAnimation}`)};
  ${(props) => ({ ...props.styling })};
`;

const Animated = ({
  children,
  isRendered,
  exitAnimation,
  enterAnimation,
  styling = { position: 'relative' },
}) => {
  const [shouldRender, setShouldRender] = useState(isRendered);

  useEffect(() => {
    if (isRendered) {
      setShouldRender(true);
    }
  }, [isRendered]);

  const onAnimationEnd = () => {
    if (!isRendered) {
      setShouldRender(false);
    }
  };

  return shouldRender && (
    <StyledAnimation
      styling={styling}
      isRendered={isRendered}
      exitAnimation={exitAnimation}
      enterAnimation={enterAnimation}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </StyledAnimation>
  );
};

Animated.propTypes = {
  enterAnimation: shape({
    id: string,
    name: string,
    inject: func,
    toString: func,
    stringifyArgs: array,
  }).isRequired,
  exitAnimation: shape({
    id: string,
    name: string,
    inject: func,
    toString: func,
    stringifyArgs: array,
  }).isRequired,
  children: node.isRequired,
  isRendered: bool.isRequired,
  styling: shape({ position: string }).isRequired,
};

export default Animated;
