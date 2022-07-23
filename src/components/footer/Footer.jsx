import React from 'react';

import FooterItem from './FooterItem';
import { StyledFooter } from './styles/StyledFooter.style';
import { StyledNav } from './styles/StyledNav.style';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledNav>
        <FooterItem iconName="stocks" pageLink="assets" name="Ações" />
        <FooterItem iconName="dollar" pageLink="bank" name="Conta Digital" />
      </StyledNav>
    </StyledFooter>
  );
}
