import styled from 'styled-components';

interface DividerProps {
  position: string;
  border?: boolean;
}

interface IconProps {
  backgroundColor?: boolean;
}

export const DividerDiv = styled.div<DividerProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid var(--black);
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: ${(props) => (props.border ? '#000000' : 'transparent')};
  grid-area: ${(props) => props.position};
`;

export const Icon = styled.span<IconProps>`
  display: block;
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--black);
  transform: rotate(45deg);
  background: ${(props) => (props.backgroundColor ? '#000000' : 'transparent')};
`;
