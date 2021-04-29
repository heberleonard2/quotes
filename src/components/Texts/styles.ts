import styled from 'styled-components';

interface TextProps {
  position: string;
}

export const Text = styled.div<TextProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  padding: 20px;

  grid-area: ${(props) => props.position};

  p {
    display: block;
    text-align: left;
    font-size: 1rem;
  }
`;
