import { useNavigate } from 'react-router-dom';
import { StyledButton } from './styles';

interface HeaderButtonProps {
  url?: string;
  name: string;
  refLink?: string;
}

function HeaderButton({ url, name, refLink }: HeaderButtonProps) {
  const navigate = useNavigate();
  return refLink ? (
    <>
      <a href={refLink}>{name}</a>
    </>
  ) : (
    <StyledButton
      onClick={() => {
        url && navigate(url);
      }}
    >
      {name}
    </StyledButton>
  );
}
export default HeaderButton;
