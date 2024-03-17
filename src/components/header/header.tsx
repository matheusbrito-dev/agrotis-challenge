import React from 'react';
import { BoxButtons, StyledHeader } from './styles';
import ImageButton from '../imageButton/ImageButton';
import logoImage from '@/assets/AcademiaAgrotisLogo.png';
import secondLogoImage from '@/assets/logo_agrotis_branco_atualizado.png';

function Header() {
  return (
    <StyledHeader>
      <BoxButtons>
        <ImageButton url="/" source={logoImage} />
      </BoxButtons>
      <BoxButtons>
        <ImageButton url="/" source={secondLogoImage} />
      </BoxButtons>
    </StyledHeader>
  );
}
export default Header;
