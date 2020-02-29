import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    position: relative;
    height: 100%;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  #root{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    margin: 10px 60px;
  }
`;
