import styled from 'styled-components';

interface LetterProps {
  position: string;
}

export const Letter = styled.div<LetterProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-left: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  position: relative;

  grid-area: ${(props) => props.position};

  p {
    font-size: 25rem;
    font-family: 'Cantarell', sans-serif;
    font-weight: 400;
    position: absolute;
    bottom: -128px;
    @media (max-width: 1500px) {
      font-size: 18rem;
      bottom: -67px;
    }
  }
`;
