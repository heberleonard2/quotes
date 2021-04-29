import styled from 'styled-components';

export const Container = styled.div`
  grid-area: signin;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--black);
    border-left: 1px solid var(--black);
  }
  div p {
    font-weight: 500;
  }
`;
