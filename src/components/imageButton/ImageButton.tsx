import { useNavigate } from 'react-router-dom';
import { StyledButton } from './styles';

interface HeaderButtonProps {
  url: string;
  source: string;
}

export default function ImageButton({ url, source }: HeaderButtonProps) {
  const navigate = useNavigate();
  return (
    <StyledButton
      onClick={() => {
        navigate(url);
      }}
    >
      <img src={source} alt="Icon" />
    </StyledButton>
  );
}
