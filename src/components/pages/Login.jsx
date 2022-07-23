import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FinanceContext from '../../context/FinanceContext';
import { getLocalStorage } from '../../utils/localStorage';
import { getSessionStorage } from '../../utils/sessionStorage';
import { CenteredFlex } from '../divs/CenteredFlex';
import LoginForm from '../forms/LoginForm';
import Logo from '../img/Logo';

export default function Login() {
  const { setToken, generateGlobalState, setUserEmail } = useContext(FinanceContext);
  const history = useHistory();
  useEffect(() => {
    const savedToken = getSessionStorage('token');
    if (savedToken) {
      setToken(savedToken);
      setUserEmail(getLocalStorage('lastUser')?.email);
      generateGlobalState();
      history.push('/assets');
    }
  }, []);

  return (
    <CenteredFlex>
      <Logo width="120" />
      <LoginForm />
    </CenteredFlex>
  );
}
