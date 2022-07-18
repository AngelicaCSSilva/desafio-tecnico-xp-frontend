import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import FinanceContext from '../../context/FinanceContext';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage';
import { CenteredForm } from './styles/CenteredForm';
import { StyledLabel } from './styles/StyledLabel';

export default function LoginForm() {
  const { setUserEmail } = useContext(FinanceContext);
  const history = useHistory();

  const [user, setUser] = useState({
    email: getLocalStorage('lastUser')?.email || '',
    password: '',
  });

  const validateForm = () => {
    const validationRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordMinLength = 6;
    return !(validationRegEx.test(user.email)
      && (user.password.length > passwordMinLength));
  };

  const handleClickButton = () => {
    saveLocalStorage('lastUser', { email: user.email, lastLogin: new Date() });
    setUserEmail(user.email);
    history.push('/stocks');
  };

  return (
    <CenteredForm>
      <StyledLabel htmlFor="email">
        Email:
        <input
          id="email"
          type="text"
          value={user.email}
          name="email"
          onChange={
              ({ target: { value, name } }) => setUser({ ...user, [name]: value })
            }
        />
      </StyledLabel>
      <StyledLabel htmlFor="password">
        Senha:
        <input
          id="password"
          type="password"
          value={user.password}
          name="password"
          onChange={
              ({ target: { value, name } }) => setUser({ ...user, [name]: value })
            }
        />
      </StyledLabel>
      <button
        type="button"
        disabled={validateForm()}
        onClick={handleClickButton}
      >
        Acessar
      </button>
    </CenteredForm>
  );
}
