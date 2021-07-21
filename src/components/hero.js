import React from 'react';
import styled from 'styled-components';
import me from '../assets/images/me.jpg';
import LinkedinLogo from './icons/linkedin-logo';
import GithubLogo from './icons/github-logo';
import InstagramLogo from './icons/instagram-logo';
import EmailIcon from './icons/email-icon';
import DownloadIcon from './icons/download-icon';

const Hero = () => {
  return (
    <StyledHeroSection id="home">
      <div className='row-grid'>
        <Column>
          <h1>Hey there! I'm</h1>
          <h2>Jimmy Zhang.</h2>
          <p className="desc">Rising sophomore studying computer science at Carnegie Mellon University. Connect with me or download my resume!</p>
          <Row> 
            <a href="https://github.com/jimmyzhang28" aria-label="Jimmy's GitHub" target="_blank" rel="noreferrer" className="logo">
              <GithubLogo width={"50"} height={"50"}/>
            </a>
            <a href="https://www.linkedin.com/in/jimmyzhang28/" aria-label="Jimmy's LinkedIn" target="_blank" rel="noreferrer" className="logo">
              <LinkedinLogo width={"50"} height={"50"}/>
            </a>
            <a href="https://www.instagram.com/jzhang7528/" aria-label="Jimmy's Instagram" target="_blank" rel="noreferrer" className="logo">
              <InstagramLogo width={"50"} height={"50"}/>
            </a>
            <a href={`mailto:jimmyzha@andrew.cmu.edu`} aria-label="Jimmy's Email" className="logo">
              <EmailIcon width={"50"} height={"50"}/>
            </a>
          </Row>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume">
            <div className="resume-container">
              <DownloadIcon width={"24"} height={"24"}/>
              <div className="resume-text">Resume</div>
            </div>
          </a>
        </Column>
        <div className="img-container"></div>
      </div>
    </StyledHeroSection>
  );
};

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;

  @media (max-width: 768px) {
    padding-top: 80px;
  }

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 10px 0px;
    color: var(--teal);
    font-family: 'Courier', 'Courier New';
    font-size: 20px;
    font-weight: 500;
  }

  h2 {
    margin: 0;
    font-size: clamp(40px, 8vw, 70px);
    text-align: right;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .desc {
    margin: 20px 0 15px;
    max-width: 360px;
    text-align: right;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .logo {
    margin: 1rem;
    transition: var(--transition);

    &:hover {
      transform: translateY(-7px);
    }

    &:last-child,
    &:last-of-type {
      margin-right: 0;
    }

    @media (max-width: 768px) {
      margin: 2vw;
      &:last-child,
      &:last-of-type {
        margin-right: 2vw;
      }
    }
  }

  .row-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 4vw;
    margin-right: 1vw;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .img-container {
    position: relative;
    background-image: url(${me});
    background-size: cover;
    background-position: center;
    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0% ;
    box-shadow: 10px 10px var(--dark-teal);
    transition: all .4s ease;

    @media (max-width: 768px) {
      margin: 20px auto 0;
      width: 220px;
      height: 316px;
    }

    &:hover {
      border-radius: 50% 50% 50% 50% / 5% 5% 5% 5%;
    }
  }

  .resume {
    color: var(--teal);
    background-color: transparent;
    border: 1px solid var(--teal);
    border-radius: 4px;
    padding: 0.75rem;
    margin: 10px 0px 0px 0px;
    font-family: 'Courier', 'Courier New';
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      transform: none;
      background-color: var(--teal-tinted);
      outline: none;
    }

    .resume-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .resume-text {
      margin-left: 8px;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  max-width: 450px;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
    margin-top: 0px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default Hero;