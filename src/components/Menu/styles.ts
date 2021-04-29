import styled from 'styled-components';

export const Container = styled.div`
  grid-area: menu;
  display: grid;
  grid-template-columns:
    minmax(250px, 1fr) minmax(100px, 310px) minmax(100px, 310px)
    minmax(100px, 310px);

  div + div {
    border-left: 1px solid var(--black);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--black);
  }
  div span {
    display: block;
    width: 10px;
    height: 10px;
    border: 1px solid var(--black);
    transform: rotate(45deg);
  }
  div span + span {
    background-color: var(--black);
    margin-left: 4px;
  }
  div h1 {
    margin-left: 0.6rem;
  }
`;
