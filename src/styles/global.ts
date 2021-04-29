import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

  :root{
    --background: #F3F2EB;
    --rating: #C42D2D;
    --black: #000000;
    --pink: #F4ACAC;
    --red: #C42D2D;
    --blue: #1B636C;

  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  //font-size: 16px (Desktop);
html{
  @media(max-width:1080px){
    font-size: 93.75%; //15px
  }

  @media(max-width:720px){
    font-size: 87.5%; //14px
  }
}

  html, body, #root{
    height:100%;
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Rubik', sans-serif;
    font-weight:400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor:pointer;
  }
  button:focus {
  outline: 2px solid var(--text);
  }
  input:focus{
  outline-color:  var(--text);
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
