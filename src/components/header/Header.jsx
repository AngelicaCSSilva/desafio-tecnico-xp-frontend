import React from 'react';

import LoggedUser from './LoggedUser';
import { StyledHeader } from './styles/StyledHeader.style';
import { UserImgExample } from './styles/UserImgExample.style';

export default function Header() {
  return (
    <StyledHeader>
      <UserImgExample />
      <LoggedUser />
    </StyledHeader>
  );
}
