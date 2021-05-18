import styled from 'styled-components';
import Q from '../../assets/q.svg';
import U from '../../assets/u.svg';
import O from '../../assets/o.svg';
import T from '../../assets/t.svg';
import E from '../../assets/e.svg';
import S from '../../assets/s.svg';
interface LetterProps {
  position: string;
  src?: 'q' | 'u' | 'o' |'t' |'e' |'s';
}

const images = {
  q: Q,
  u: U,
  o: O,
  t: T,
  e: E,
  s: S

};

export const Letter = styled.div<LetterProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-left: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  position: relative;

  background:
    url(${(props) => (props.src ? images[props.src] : '')}) no-repeat center;
  background-size: cover;

  grid-area: ${(props) => props.position};


`;
