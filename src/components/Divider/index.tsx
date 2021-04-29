import { DividerDiv, Icon } from './styles';

export function Divider() {
  return (
    <>
      <DividerDiv position={'divider1'} border>
        <Icon></Icon>
        <Icon backgroundColor></Icon>
        <Icon></Icon>
      </DividerDiv>
      <DividerDiv position={'divider2'}>
        <Icon backgroundColor></Icon>
        <Icon></Icon>
        <Icon backgroundColor></Icon>
        <Icon></Icon>
        <Icon backgroundColor></Icon>
        <Icon></Icon>
        <Icon backgroundColor></Icon>
      </DividerDiv>
    </>
  );
}
