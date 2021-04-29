import { Image } from './style';

export function Images() {
  return (
    <>
      <Image
        position={'img1'}
        backgroundColor={'#C42D2D'}
        src={'woman1'}
      ></Image>
      <Image position={'img2'}></Image>
      <Image
        position={'img3'}
        backgroundColor={'#F4ACAC'}
        src={'woman2'}
      ></Image>
      <Image position={'img4'}></Image>
      <Image position={'img5'} backgroundColor={'#1B636C'} src={'man'}></Image>
      <Image position={'img6'}></Image>
    </>
  );
}
