import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: ${(props) => props.theme.color.white.normal};
    background: ${(props) => props.theme.color.purple.normal};

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;

    min-height: 100vh;
    scroll-behavior: smooth;
  }

  h1,h2,h3,h4,h4,h6 {
    font-family: ${(props) => props.theme.font.title};
  }

  body {
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: ${(props) => props.theme.font.body};
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
    border: none;
    outline: 0;
    background: none;
  }

  @media ${(props) => props.theme.breakpoint.tablet.midle} {
    :root {
      font-size: 70.5%;
    }
  }

  @media ${(props) => props.theme.breakpoint.desktop.small} {
    :root {
      font-size: 75.5%;
    }
  }

  @media ${(props) => props.theme.breakpoint.desktop.midle} {
    :root {
      font-size: 85%;
    }
  }

`;
