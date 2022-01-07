import React from 'react';
import styled from 'styled-components';
import { experiences } from '../assets/info/resume-info'; 

import BasketballIcon from './icons/basketball-icon';
import GameIcon from './icons/game-icon';
import ChessIcon from '../assets/images/chess.svg';
import NetflixLogo from './icons/netflix-logo';
import SpotifyLogo from './icons/spotify-logo';

const About = () => {

  let classes = experiences.classes;

  return (
    <StyledAboutSection id="about">
      <div className="title">About Me</div>
      <p className="description">
        Hi, I’m Jimmy! I’m a rising sophomore at <span>Carnegie Mellon University</span> majoring in computer science with possible minors in human-computer interaction, 
        machine learning, and/or business administration.
      </p>
      <div className="row-grid">
        <div className="classes">
          <div className="classes-heading">Here are some classes I've taken at CMU:</div>
          <ClassList>
            {classes.length && classes.map((currClass, i) => {
              return (
                <li key={i}>{currClass}</li>
              );
            })}
          </ClassList>
        </div>
        <div className="misc">
          <div className="info">
            I'll also be a Teaching Assistant (TA) for 15-150 for the Spring 2022 semester. I'll be
            <ul className="info-list">
              <li>leading recitations for 20+ students</li>
              <li>holding weekly office hours to offer extra help</li>
              <li>grading homeworks and exams for 200+ students</li>
              <li>cultivating a rigorous but enjoyable learning experience!</li>
            </ul>
          </div>
          <div className="interests">
            <div>And in my free time, I'd love to hang out and enjoy some of my favorite activities! How about a game of chess?</div>
            <div className="interests-row">
              <a href="https://www.nba.com/rockets/" aria-label="basketball" target="_blank" rel="noreferrer" className="interests-icon">
                <BasketballIcon width={"45"} height={"45"}/>
              </a>
              <a href="https://playvalorant.com/" aria-label="game" target="_blank" rel="noreferrer" className="interests-icon">
                <GameIcon width={"45"} height={"45"}/>
              </a>
              <a href="https://www.chess.com/member/jchess7528" aria-label="chess" target="_blank" rel="noreferrer" className="interests-icon">
                <img src={ChessIcon} alt=""/>
              </a>
              <a href="https://www.netflix.com/browse?jbv=70264888" aria-label="Netflix" target="_blank" rel="noreferrer" className="interests-icon">
                <NetflixLogo width={"45"} height={"45"}/>
              </a>
              <a href="https://open.spotify.com/playlist/3yWma7g2hN2WeB6QedOFSm?si=f3813628caf548fc" aria-label="Spotify" target="_blank" rel="noreferrer" className="interests-icon">
                <SpotifyLogo width={"45"} height={"45"}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledAboutSection>
  );
}

const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 125px 1rem;

  .title {
    margin: 0;
    color: var(--stark);
    font-weight: 600;
    font-size: clamp(30px, 5vw, 40px);
    text-align: center;
  }

  .description {
    margin: 2rem 5rem;
    text-align: center;
    font-size: clamp(15px, 2.5vw, 18px);
    
    span {
      color: var(--teal);
    }

    @media (max-width: 768px) {
      margin: 2rem;
    }
  }

  .row-grid {
    display: grid;
    grid-template-columns: 9fr 7fr;
    grid-gap: 2vw;
    margin: 0 2rem;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .classes {
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--slate);

    @media (max-width: 768px) {
      border-right: none;
    }
  }

  .classes-heading {
    color: var(--stark);
    margin-bottom: 1rem;
    font-size: clamp(18px, 3vw, 20px);

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .info,
  .interests {
    color: var(--stark);
    font-size: clamp(14px, 2vw, 16px);
    margin-bottom: 15px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .info-list {
    color: var(--slate);
    padding-left: 30px;
    margin: 0.5rem 0px;

    li {
      margin-bottom: 8px;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      list-style-type: none;
      padding: 0;
    }
  }

  .interests-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .interests-icon {
    padding: 0.5rem;
    transition: var(--transition);

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const ClassList = styled.ul`
  padding: 0px 2vw 0px 0px;
  margin: 0;
  list-style: none;
  position: relative;
  hyphens: auto;

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 20px;
  }

  li {
    font-family: 'Courier', 'Courier New';
    font-size: clamp(12px, 2vw, 14px);
    color: var(--dark-teal);
    padding-left: 20px;
    margin-bottom: 15px;
    hyphens: none;

    &::before {
      content: "»";
      position: absolute;
      left: 0px;
      color: var(--teal);
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0;
      &::before {
        content: "";
      }
    }
  }
`;

export default About;