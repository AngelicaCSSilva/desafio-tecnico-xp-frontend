import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import FinanceContext from '../../context/FinanceContext';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage';
import { StyledLoginButton } from '../button/styles/StyledLoginButton.style';
import ErrorMessage from '../error/ErrorMessage';
import { CenteredForm } from './styles/CenteredForm.style';
import { StyledInput } from './styles/StyledInput.style';
import { StyledLabel } from './styles/StyledLabel.style';

export default function LoginForm() {

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
    history.push('/assets');
  };

  return (
    <CenteredForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="email">
        Email:
        <StyledInput
          id="email"
          type="text"
          value={user.email}
          required
          name="email"
          onChange={
              ({ target: { value, name } }) => setUser({ ...user, [name]: value })
            }
        />
      </StyledLabel>
      <StyledLabel htmlFor="password">
        Senha:
        <StyledInput
          id="password"
          type="password"
          value={user.password}
          name="password"
          required
          onChange={
              ({ target: { value, name } }) => setUser({ ...user, [name]: value })
            }
        />
      </StyledLabel>
      {error && <ErrorMessage error={error} />}
      <StyledLoginButton
        type="submit"
        disabled={validateForm()}
      >
        ACESSAR
      </StyledLoginButton>
    </CenteredForm>
  );
}
