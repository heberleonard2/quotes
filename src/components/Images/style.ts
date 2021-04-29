import styled from 'styled-components';
import Woman1 from '../../assets/woman1.png';
import Woman2 from '../../assets/woman2.png';
import Man from '../../assets/man.png';

interface DividerProps {
  position: string;
  backgroundColor?: string;
  src?: 'woman1' | 'woman2' | 'man';
}

const images = {
  woman1: Woman1,
  woman2: Woman2,
  man: Man,
};

export const Image = styled.div<DividerProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid var(--black);
  border-left: 1px solid var(--black);
  overflow: hidden;
  background: ${(props) => props.backgroundColor || 'transparent'}
    url(${(props) => (props.src ? images[props.src] : '')}) no-repeat center;
  background-size: cover;
  grid-area: ${(props) => props.position};
  position: relative;
`;
