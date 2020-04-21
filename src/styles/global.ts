import { createGlobalStyle } from 'styled-components';
import githubBG from '../assets/github-bg.svg';

export const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0; 
    padding: 0; 
    outline:0; 
    box-sizing: border-box;
  }

  body {
    background: #f0f0f0 url(${githubBG}) no-repeat 50% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto; 
    padding: 40px 20px;
  }
`;
