import { Grid } from './styles';
import { Menu } from '../Menu';
import { Letters } from '../Letters';
import { Texts } from '../Texts';
import { SignIn } from '../SignIn';
import { Main } from '../Main';
import { Divider } from '../Divider';
import { Images } from '../Images';
import { Rating } from '../Rating';
export function Layout() {
  return (
    <Grid>
      <Menu />
      <Letters />
      <Texts />
      <SignIn />
      <Main />
      <Divider />
      <Images />
      <Rating />
    </Grid>
  );
}
