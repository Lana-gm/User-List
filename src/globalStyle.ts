import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-family: Arial, sans-serif;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    font-family: inherit;
  }
`;
