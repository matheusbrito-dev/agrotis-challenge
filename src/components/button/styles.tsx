import styled from 'styled-components';
import { ButtonBase, ButtonBaseProps } from '@mui/material';

export const StyledButton = styled(ButtonBase)<ButtonBaseProps>`
  && {
    background-color: #018570;
    border-radius: 10px;
    height: 40px;
    width: 100px;
    color: white;
    padding: 8px 16px;

    &:hover {
      background-color: #018520;
    }
  }
`;
