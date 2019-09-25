import styled, { createGlobalStyle } from "styled-components";
import { cores } from "../components/colors";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
    background-color: ${cores.cinza};
    color: ${cores.preto};
  }
  .container{
    display: flex;
    margin: 0 auto;
    flex-direction: column;
  }

`;

export const LabelMobile = styled.p`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const LabelBrowser = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
