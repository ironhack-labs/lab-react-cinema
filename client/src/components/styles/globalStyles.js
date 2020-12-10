import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    background:${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1{
    font-weight: bold;
  }
  a {
    background-color: blue;
  }
`;
