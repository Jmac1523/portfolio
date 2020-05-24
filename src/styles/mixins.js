import { keyframes, css } from 'styled-components';
import { breakpoints } from './variables';

export const mediaQuery = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

export const flexCenterAll = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexCenterSpaceBetween = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const bounceInRight = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  
  75% {
    transform: translate3d(10px, 0, 0);
  }
  
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const bounceOutRight = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;

export const bounceInDown = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const bounceOutUp = keyframes`
  20% {
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;
