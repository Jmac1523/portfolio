import React from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const StyledExperience = styled.section`
  background-color: lightblue;
  position: relative;
`;

const Experience = () => {
  return (
    <StyledExperience id="experience">
      <SectionTitle>
        Experience
      </SectionTitle>
    </StyledExperience>
  );
};

export default Experience;
