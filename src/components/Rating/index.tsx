import { BsStarFill, BsStarHalf } from 'react-icons/bs';

import birdEye from '../../assets/birdeye.svg';
import google from '../../assets/google.svg';

import { Container, RatingDiv, Separator } from './style';

export function Rating() {
  return (
    <>
      <Container>
        <RatingDiv>
          <img src={google} alt="google" />
          <div>
            {[1, 2, 3, 4, 5].map((i) => {
              return <BsStarFill color="#C42D2D" size="24" />;
            })}
            <p>5.0 out of 5 stars</p>
          </div>
        </RatingDiv>
        <Separator />
        <RatingDiv>
          <img src={birdEye} alt="bird-eye" />
          <div>
            {[1, 2, 3, 4].map((i) => {
              return <BsStarFill color="#C42D2D" size="24" />;
            })}
            <BsStarHalf color="#C42D2D" size="24" />
            <p>4.5 out of 5 stars</p>
          </div>
        </RatingDiv>
      </Container>
    </>
  );
}
