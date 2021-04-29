import styled from 'styled-components';
import { BsTriangleFill, BsTriangle } from 'react-icons/bs';

export const Container = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--black);
  padding: 35px;

  div {
    h2 {
      text-align: left;
      font-size: 5.2rem;

      &:last-child {
        text-align: right;
      }
    }

    div {
      display: flex;
      align-items: center;

      a {
        text-decoration: none;
        color: var(--black);
        font-size: 1.2rem;
        font-weight: 500;
        margin-left: 4.2rem;
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const ArrowBg = styled(BsTriangleFill)`
  margin-left: 8px;
  transform: rotate(90deg);
`;
export const Arrow = styled(BsTriangle)`
  transform: rotate(90deg);
`;
