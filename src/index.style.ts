import styled, { createGlobalStyle } from 'styled-components';

import { accentColor4 } from './shared/constants/constants.style';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-variant: normal;
    background-color: ${accentColor4};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
