import React from 'react';

import { CenteredFlex } from '../divs/CenteredFlex';
import LoginForm from '../forms/LoginForm';
import Logo from '../img/Logo';

export default function Login() {
  return (
    <CenteredFlex>
      <Logo width="120" />
      <LoginForm />
    </CenteredFlex>
  );
}
