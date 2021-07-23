import * as React from "react"
import Seo from "../components/seo";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";
import Glitch from "../components/widgets/glitch";

const Container404 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .desc {
    margin: 0;
    padding: 0px 4rem 2rem 4rem;
    text-align: center;
    font-size: clamp(20px, 3vw, 25px);
  }

  .home-button {
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

    .button-text {
      font-size: clamp(14px, 3vw, 16px);
      text-align: center;
    }
  }
`;

const NotFoundPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Seo title="404: Not found" />
    <Container404>
      <Glitch data-glitch="404">404</Glitch>
      <p className="desc">This page doesn't exist. Return home! Or, you know, you can vibe here. <br></br> No judgment :)</p>
      <a href="/" className="home-button">
          <div className="button-text">Back home it is?</div>
      </a>
    </Container404>
  </React.Fragment>
)

export default NotFoundPage
