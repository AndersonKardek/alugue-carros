import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
    scroll-behavior: smooth ;

    transition: all 400ms ease-in-out;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  ul ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    text-decoration: none;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
