import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-navy: #12182b;
    --navy: #1c2341;
    --gray: #394f6b;
    --dark-teal: #55bec0;
    --teal: #6dffe7;
    --teal-tinted: rgba(109, 255, 231, 0.1);
    --stark: #ccd6f6;
    --slate: #8892b0;
    --dark-slate: #495670;

    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  /* Scrollbar Styles */

  body::-webkit-scrollbar {
    width: 12px;
    height: 0px;
  }
  body::-webkit-scrollbar-track {
    background: var(--dark-navy);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--dark-navy);
    border-radius: 10px;
  }

  /* Global Formatting */

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--dark-navy);
    color: var(--slate);
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    line-height: 1.3;

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      @media (max-width: 768px) {
        overflow: hidden;

        header {
          background-color: transparent;
        }

        section {
          filter: blur(5px) brightness(0.7);
          transition: var(--transition);
          pointer-events: none;
          user-select: none;
          visibility: hidden;
        }

        #nav {
          transform: translateY(0px);
          background-color: rgba(18, 24, 43, 0.8);
          backdrop-filter: blur(10px);
        }
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--stark);
    line-height: 1.1;
  }
`;

export default GlobalStyle;