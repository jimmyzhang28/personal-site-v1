import React from 'react';
import styled from 'styled-components';

const ExperienceCard = ({job}) => {
  return (
    <StyledExperienceWrapper>
      <StyledTitle>
        <img className="round-img" src={job.logo} alt={job.company}/>
        <div className="title-col">
          <h1 className="company-text">{job.company}</h1>
          <h1 className={"role"}>{job.role}</h1>
          <h1 className={"range"}>{job.range}</h1>
        </div>
      </StyledTitle>
      <BulletPoints>
        {job.bulletPoints.length && job.bulletPoints.map((bullet, i) => {
          return (
            <li key={i}>{bullet}</li>
          );
        })}
      </BulletPoints>
      <TechRow>
        {job.tech.length && job.tech.map((tech, i) => {
          return (
            <span key={i} className="tech-label">{tech}</span>
          );
        })}
      </TechRow>
    </StyledExperienceWrapper>
  )
};

const StyledExperienceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  align-items: center;

  background-color: var(--navy);
  border-radius: 10px;
  margin: 1rem;
  padding: 2rem;
  transition: var(--transition);

  &:hover {
    transform: translateY(-10px);
    
    @media (max-width: 1000px) {
      transform: none;
    }
  }

  .company-text {
    color: var(--teal);
    font-family: 'Courier', 'Courier New';
    text-align: center;
    font-size: 25px;
  }

  .round-img {
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    width: 6rem;
    height: 6rem;
    box-shadow: 0 0.5rem 1rem rgba(255,255,255, 0.5);
    border-radius: 50%;
  }

  .role {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    line-height: normal;
  }
  
  .range {
    text-align: center;
    font-size: 18px;
    margin: 0px;
    padding: 1rem 0;
    font-weight: 600;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: var(--transition);

  .title-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;

    .round-img {
      margin: 0px 20px 0px 0px;
    }

    .title-col {
      align-items: flex-start;
    }

    .company-text {
      margin: 0;
    }

    .range {
      padding: 0.25rem 0;
    }
  }
`;

const BulletPoints = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  hyphens: auto;

  li {
    font-size: clamp(14px, 2.5vw, 16px);
    padding-left: 20px;
    margin-bottom: 10px;

    &::before {
      content: "»";
      position: absolute;
      left: 0px;
      color: var(--teal);
    }
  }
`;

const TechRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .tech-label {
    margin: 0px 10px;
    padding: 5px;
    font-family: 'Courier', 'Courier New';
    font-size: 15px;
    text-align: center;
    color: var(--teal);
  }
`;

export default ExperienceCard;