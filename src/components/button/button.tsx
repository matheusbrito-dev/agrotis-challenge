import { IStyledButtonBaseProps } from '@/interfaces/form.interface';
import { StyledButton } from './styles';

export default function StyledButtonBase({ textLabel, ...props }: IStyledButtonBaseProps) {
  return <StyledButton {...props}>{textLabel}</StyledButton>;
}
