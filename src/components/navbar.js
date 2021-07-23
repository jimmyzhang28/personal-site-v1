import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from "react-scroll";
import useScrollDirection from '../hooks/useScrollDirection';
import Hamburger from './widgets/hamburger';
import { Helmet } from "react-helmet"
import avatarLogo from '../assets/images/avatar.png';

const Navbar = () => {

  const scrollDir = useScrollDirection({
    initialDirection: 'up',
    thresholdPixels: 1
  });

  const [open, setOpen] = useState(false);
  
  return (
    <StyledNav id="nav" scrollDir={scrollDir}>
      <Helmet>
        <body className={open ? 'blur' : ''} />
      </Helmet>
      
      <div className="nav-logo">
        <img className="round-img" src={avatarLogo} alt="Navbar logo"/>
      </div>
      <StyledNavLinks isOpen={open}>
        <li className="nav-item">
          <Link to="about" className="nav-link" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)} tabIndex={open ? 1 : -1}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="experience" className="nav-link" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)} tabIndex={open ? 2 : -1}>
            Experience
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projects" className="nav-link" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)} tabIndex={open ? 3 : -1}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" className="nav-link" spy={true} smooth={true} duration={500} onClick={() => setOpen(false)} tabIndex={open ? 4 : -1}>
            Contact
          </Link>
        </li>
      </StyledNavLinks>
      <Hamburger open={open} setOpen={setOpen}/>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 5;
  height: 70px;
  width: 100%;
  background: var(--dark-navy);
  box-shadow: 0 10px 30px -10px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 2rem;
  font-size: 1.2rem;
  transition: var(--transition);
  
  ${props => props.scrollDir === 'up' &&
    css`
      transform: translateY(0px);
      background-color: rgba(18, 24, 43, 0.8);
      backdrop-filter: blur(10px);
    `
  };

  ${props => props.scrollDir === 'down' &&
    css`
      transform: translateY(-70px);
      box-shadow: none;
    `
  };

  .round-img {
    object-fit: cover;
    margin: auto;
    margin-top: 5px;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`;

const StyledNavLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 50px;
  list-style: none;
  transition: var(--transition);

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    ${props => props.isOpen &&
      css`
        flex-flow: column nowrap;
        background-color: var(--dark-navy);
        justify-content: center;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        margin: 0;
        padding: 50px 10px;
      `
    };
  }

  .nav-item {
    margin: 0;
    text-align: center;
  }

  .nav-link {
    text-decoration: none;
    font-weight: 700;
    color: var(--stark);
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--teal);
    cursor: pointer;
  }
`;

export default Navbar;