import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  html{
    // isso torna a utilização da unidade de medida rem mais fácil
    // ex: 30px = 3rem; 32px = 3.2rem
    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.lightCyan};
    font-size: 1.6rem;
  }

  body,input,button{
    font-family: 'League Spartan', sans-serif;
  }

  button{
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .7s ease;
  }

  .App{
    width: 100%;
  }
`;
