import React from 'react';
import styled, { css } from 'styled-components';

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledHamburger aria-label="Main Menu" aria-expanded={open} onClick={() => setOpen(!open)} isOpen={open}>
      <svg width="50" height="50" viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </StyledHamburger>
  );
};


const StyledHamburger = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;
  padding: 0;
  z-index: 10;

  @media (max-width: 768px) {
    display: flex;
  }

  .line {
    fill: none;
    stroke: rgba(85,190,192,1);
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1,
  .line3 {
    stroke-dasharray: ${props => (props.isOpen ? '90 207' : '60 207')};
    stroke-width: 6;

    ${props => props.isOpen &&
      css`
        stroke-dashoffset: -134;
      `
    };
  }
  .line2 {
    stroke-dasharray: ${props => (props.isOpen ? '1 60' : '60 60')};
    stroke-width: 6;

    ${props => props.isOpen &&
      css`
        stroke-dashoffset: -30;
      `
    };
  }
`;

export default Hamburger;