import React from 'react';
import styled from 'styled-components';
import { experiences } from '../assets/info/resume-info';
import ExperienceCard from './widgets/experience-card';

// add new logo per experience
import grapevine from '../assets/images/grapevine.png';
import boo from '../assets/images/boo.png';
import responsival from '../assets/images/responsival.png';

const Experience = () => {

  let data = experiences.experienceInfo;
  data[0].logo = grapevine;
  data[1].logo = boo;
  data[2].logo = responsival;

  return (
    <StyledExperienceSection id="experience">
      <div className="title">My Experience</div>
      <StyledExperienceCards>
        {data.length && data.map((job, i) => {
          return (
            <ExperienceCard key={i} job={job}/>
          );
        })}
      </StyledExperienceCards>
    </StyledExperienceSection>
  );
};

const StyledExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: max(1400px, 60vw);
  justify-content: center;
  align-items: center;
  transition: var(--transition);

  .title {
    margin: 0;
    color: var(--stark);
    font-weight: 600;
    font-size: clamp(30px, 5vw, 40px);
    text-align: center;
  }
`;

const StyledExperienceCards = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 2rem;
  transition: var(--transition);

  @media (max-width: 1000px) {
    flex-direction: column;
    padding-bottom: 10vh;
  }
`;

export default Experience;