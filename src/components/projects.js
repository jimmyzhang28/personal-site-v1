import React from 'react';
import styled from 'styled-components';
import { experiences } from '../assets/info/resume-info';
import Project from './widgets/project';

import discord from '../assets/images/discord.jpg';
import alexa from '../assets/images/alexa.jpg';
import website from '../assets/images/website.jpg';

const Projects = () => {

  let data = experiences.projectInfo;
  data[0].picture = discord;
  data[1].picture = alexa;
  data[2].picture = website;

  return (
    <StyledProjectsSection id="projects">
      <div className="title">My Projects</div>
      <StyledProjectsList>
        {data.length && data.map((project, i) => {
          return (
            <Project key={i} project={project}/>
          );
        })}
      </StyledProjectsList>
    </StyledProjectsSection>
  );
};

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(1000px, 90vw);
  

  .title {
    margin: 0;
    color: var(--stark);
    font-weight: 600;
    font-size: clamp(30px, 5vw, 40px);
    text-align: center;
  }
`;

const StyledProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  transition: var(--transition);

  @media (max-width: 768px) {
    padding: 2rem 0.75rem;
  }
`;

export default Projects;