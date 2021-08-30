import { createGlobalStyle } from 'styled-components';
import { Medias } from './Media';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: #707070;
    --subprimary: #DFDFDF;
    --white : #ffffff;
    --black: #000000;

  }
  html{
    font-size: 10px;
    height: 100vh;
  }
  body{
    background-color: var(--white);
    font-family: 'Roboto Mono';
    color: var(--black);
    letter-spacing: 0.1em;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: var(--black);

  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .container.small {
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
  }

`;

export default GlobalStyles;
