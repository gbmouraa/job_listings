import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width: 100%;
    min-height: 100vh;
  }

  body,input,button{
    font-family: 'League Spartan', sans-serif;
  }

  button{
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .3s ease;
  }
`;
