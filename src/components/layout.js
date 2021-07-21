import * as React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <>
      <div id="root">
        <GlobalStyle/>
        <StyledContent>
          {children}
        </StyledContent>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
