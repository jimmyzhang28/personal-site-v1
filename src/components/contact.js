import React from 'react';
import styled from 'styled-components';
import DownloadIcon from './icons/download-icon';

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <div className="title">Let's Connect</div>
      <p className="description">
        I'm always open to new opportunities in software, AI, and anything practical! Feel free to reach out. My inbox is always open!
      </p>
      <div className="button-row">
        <a href={`mailto:jimmyzha@andrew.cmu.edu`} className="contact-button">
          <div className="contact-text">Get in Touch</div>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="contact-button">
          <div className="button-container">
            <DownloadIcon width={"24"} height={"24"}/>
            <div className="button-text">Resume</div>
          </div>
        </a>
      </div>
    </StyledContactSection>
  );
};

const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 1rem 200px 1rem;

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
    font-size: clamp(14px, 2.5vw, 18px);
  }

  .button-row {
    display: flex;
    flex-diretion: row;
    justify-content: center;
  }

  .contact-button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--teal);
    background-color: transparent;
    border: 1px solid var(--teal);
    border-radius: 4px;
    padding: 0.75rem;
    margin: 10px;
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

    .button-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .button-text,
    .contact-text {
      font-size: clamp(14px, 3vw, 16px);
      text-align: center;
    }

    .button-text {
      margin-left: 8px;
    }
  }
`;

export default Contact;