import React from 'react';
import styled from 'styled-components';

import GithubLogo from '../icons/github-logo';
import ExternalIcon from '../icons/external-icon';

const Project = ({project}) => {
  return (
    <StyledProject>
      <div className="content">
        <div className="box">
          <div className="project-title">
            {project.title}
            </div>
          <div className="project-desc">
            {project.description}
          </div>
          <div className="tech-row">
            {project.tech.length && project.tech.map((tech, i) => {
              return (
                <span key={i} className="tech-label">{tech}</span>
              );
            })}
          </div>
        </div>
        <div className="link-row">
          <a href={project.githubLink} aria-label="Project GitHub" target="_blank" rel="noreferrer" className="logo">
            <GithubLogo width={"40"} height={"40"} />
          </a>
          {project.externalLink && (
            <a href={project.externalLink} aria-label="Project Link" target="_blank" rel="noreferrer"className="logo">
              <ExternalIcon width={"40"} height={"40"} />
            </a>
          )}
        </div>
      </div>
      <div className="image-banner">
        <img src={project.picture} alt="" className="img"/>
      </div>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  .content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    z-index: 2;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      margin: 0;
      background-color: transparent;
    }

    @media (max-width: 480px) {
      padding: 25px 25px 20px;
    }
  }

  .box {
    background-color: var(--navy);
    padding: 1rem;
    border-radius: 5px;

    @media (max-width: 768px) {
      background-color: transparent;
    }
  }

  .project-title {
    color: var(--teal);
    font-family: 'Courier', 'Courier New';
    font-weight: 700;
    font-size: clamp(16px, 3.5vw, 20px);

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .project-desc {
    font-size: clamp(14px, 2.5vw, 16px);
    margin: 10px 0px;

    @media (max-width: 768px) {
      text-align: center;
      color: var(--stark);
    }
  }

  .tech-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  
    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .tech-label {
    padding: 0px 8px;
    font-family: 'Courier', 'Courier New';
    font-size: clamp(14px, 2.5vw, 15px);
    text-align: center;
    color: var(--teal);
  }

  .link-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .logo {
    margin: 0.5rem;
  }

  .image-banner {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    transition: var(--transition);

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    &:hover {
      background: transparent;
      outline: 0;

      .img {
        background: transparent;
        filter: none;
      }
    }

    .img {
      width: 100%;
      height: auto;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(70%);
      transition: var(--transition);

      @media (max-width: 768px) {
        object-fit: cover;
        height: 500px;
        filter: grayscale(100%) contrast(1) brightness(60%);
      }
    }
  }

  &:nth-of-type(odd) {
    .content {
      grid-column: 7 / -1;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    
    .image-banner {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }

    .link-row {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: center;
      }
    }
  }
`;

export default Project;