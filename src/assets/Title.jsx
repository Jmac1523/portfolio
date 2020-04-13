import React from 'react';
import styled from 'styled-components';

const Title = styled.svg`
  @keyframes zoomInLeft {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }

  animation-name: zoomInLeft;
  animation-duration: 2s;
`;

export default () => (
  <Title xmlns="http://www.w3.org/2000/svg" viewBox="0 0 946.1 793.1">
    <defs>
      <pattern
        id="a"
        width="10.9"
        height="10.82"
        patternUnits="userSpaceOnUse"
        viewBox="0 0 10.9 10.8"
      >
        <path fill="none" d="M0 0h10.9v10.82H0z" />
        <path fill="#fff" d="M0 0h10.8v10.8H0z" />
        <path
          d="M10.9 8.2a2.8 2.8 0 01-2.7-2.7 2.7 2.7 0 012.7-2.7M.1 2.8a2.7 2.7 0 010 5.4M8.2 0a2.7 2.7 0 11-5.4 0M2.8 10.8a2.7 2.7 0 012.7-2.7 2.8 2.8 0 012.7 2.7"
          fill="#008bce"
        />
      </pattern>
    </defs>
    <path
      d="M847.4 272c27.9-1.5 28.7-35.5 2.5-39.3 96.9-23.9 89.6-187.6-48.8-119.4 66.3-45.2-21.3-151.4-140.7-20.8-12.4-15.6-39.2-12.9-48.8 2.3-9.5-64.6-101.8 17.4-105.9 44.7-3.5-4.4-16.6-8-23.1 0 8.8-40.7-39.8-24.7-54.6-16.2-19.7 9.7-36 32.3-43 43.9"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="6"
      fill="url(#a)"
    />
    <path
      d="M385 167.2c-87.1-29.5-197.5 41.9-167.2 137.9-74.3 20.2-143.3 106.5-29.7 104.8-36.6 4.1-147.2 105.9-65.4 143.3-178.5 71.1-44.8 196.1 67.8 102.5 2.4 26.4 38.9 37.5 62.9 13.8-3.4 3.7-21.3 23.6-18.2 51.6-.1 34.4 26.6 47.6 60.4 34.7 45.1-14.5 62-64 65.4-74.7 53 33.9 162.2 48.8 191.9-34.7 17.9 6.1 48.8-10.2 40.5-37.7 50.2 78.3 149.3-12.2 127.4-73.2 19.2 15.4 46.7-1.2 40.6-30.1 112 25 245.2-135 83.5-163.3 40.9-5.5 42.2-59.1 4.2-70.1"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="6"
      fill="url(#a)"
    />
    <path
      d="M123 559.9c75.7-1.4 146.3-77.1 84.7-143.4 61.7 12.9 126.9-52.3 85.8-126.6 66.9 23.7 136.5-46.7 99.1-110.1 48.3 32.1 115.8 5.7 127.1-40.9 48.5 60.4 131.5 32.7 134.3-28.3 20.7 34.8 71.8 39.3 95 13.7-4.8 32.8 33.6 67.2 74.4 52.6C782.9 201.2 777 278 844 299.6c-73.2-6.2-95.9 77.7-27.8 116.9-63.2-26.8-130 47.2-84.7 103.2-62.6-53.7-155.8 6-126.1 87.7-44.6-63-156.9-26.6-146.6 52.6-29.5-60.2-122.1-55.3-160.2 12.6 10.3-68.2-77.3-106.3-137.3-45.7 34.6-26.8 1.6-76.5-38.3-67"
      fill="#b3262a"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="4"
    />
    <path
      fill="#fce600"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M533.5 5.1l-9.3 306.6L885.5 1.1l-299 343.6 334-58.6-336.2 110.1 361.2 151.9-377.8-99.7 180.8 242.7-224.3-210.4 4.7 231.1-58.4-231.1-247 311.4 203.6-343.7L.5 555.1l410-158.9-272-77.1L427.1 344 253.5 68.1l217 243.6 63-306.6z"
    />
    <path
      fill="#fff"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M584.1 653.7l-109-131.6L360.7 705l19.9-201.3-239.1 124.1L329.9 439l-217.6-31 222.1-47.5-184.3-185.4 250.1 115.2-11.3-204.7 110.4 172.7L643.2 67.7l-49.4 209 289.7-99.6-236 161.3 286.2 49.7L640 419.9l215.2 157.3-281-87.1 9.9 163.6z"
    />
    <text
      transform="matrix(.98 -.05 .05 1 260.05 389.19)"
      fontSize="156.288"
      fontFamily="ScriptoramaMarkdownJF-Regular,ScriptoramaMarkdownJF"
    >
      Justin
      <tspan x="-86.4" y="133.5">
        McKenzie
      </tspan>
    </text>
    <text
      transform="matrix(.99 -.05 .05 1 253.86 388.54)"
      fontSize="152.905"
      fill="#2f559a"
      fontFamily="ScriptoramaMarkdownJF-Regular,ScriptoramaMarkdownJF"
    >
      Justin
      <tspan x="-84.6" y="133.5">
        McKenzie
      </tspan>
    </text>
  </Title>
);
