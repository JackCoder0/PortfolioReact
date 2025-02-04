import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    transition: background-color 0.5s ease, color 0.5s ease;
    background: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 1rem;
  }
`;
 