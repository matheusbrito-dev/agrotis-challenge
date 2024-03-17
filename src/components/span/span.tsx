import { BoxSpan, StyledSpan } from './styles';

interface ISpan {
  text: string;
  color: string;
}
export default function Span({ text, color }: ISpan) {
  return (
    <BoxSpan>
      <StyledSpan color={color}>{text}</StyledSpan>
    </BoxSpan>
  );
}
