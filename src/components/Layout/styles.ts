import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns:
    auto minmax(100px, 270px) minmax(100px, 270px) minmax(100px, 270px)
    minmax(100px, 270px);
  /* grid-template-rows: 1fr 1fr 2fr 2fr 2fr 0.5fr 2fr; */
 
  grid-template-rows: 100px 100px 200px 200px 200px 50px 200px;

  @media(min-width:1500px){
    grid-template-rows: 1fr 1fr 2fr 2fr 2fr 0.5fr 2fr;
  }

  grid-template-areas:
    'menu q learn signin signin'
    'main q learn divider1 divider1'
    'main img1 img2 u img3'
    'main rid o img4 t'
    'main e img5 img5 tips'
    'divider2 img6 img5 img5 s'
    'rating img6 img5 img5 s';
  height: 100vh;
`;
