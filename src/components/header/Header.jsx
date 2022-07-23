import React from 'react';

import LoggedUser from './LoggedUser';
import Logout from './Logout';
import { StyledHeader } from './styles/StyledHeader.style';
import { StyledUserDiv } from './styles/StyledUserDiv.style';
import { UserImgExample } from './styles/UserImgExample.style';

export default function Header() {
  return (
    <StyledHeader>
      <StyledUserDiv>
        <UserImgExample />
        <LoggedUser />
      </StyledUserDiv>
      <Logout />
    </StyledHeader>
  );
}
