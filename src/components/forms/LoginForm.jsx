import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import FinanceContext from '../../context/FinanceContext';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage';
import { saveSessionStorage } from '../../utils/sessionStorage';
import { StyledLoginButton } from '../button/styles/StyledLoginButton.style';
import ErrorMessage from '../error/ErrorMessage';
import { CenteredForm } from './styles/CenteredForm.style';
import { StyledInput } from './styles/StyledInput.style';
import { StyledLabel } from './styles/StyledLabel.style';

export default function LoginForm() {
  const {
    setUserEmail,
    setToken,
    setUserId,
    setUserName,
  } = useContext(FinanceContext);
  const [error, setError] = useState(null);

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

  const submitLogin = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify(
        `grant_type=&username=${user.email}&password=${user.password}&scope=&client_id=&client_secret=`,
      ),
    };

    const response = await fetch('https://desafiobackend-angelica.herokuapp.com/token', requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setError(data.detail);
    } else {
      setToken(data.access_token);
      setUserId(data.user_id);
      setUserName(data.user_name);
      saveLocalStorage('lastUser', { email: user.email, lastLogin: new Date().toISOString() });
      saveSessionStorage('token', data.access_token);
      saveSessionStorage('userId', data.user_id);
      saveSessionStorage('userName', data.user_name);
      setUserEmail(user.email);
      history.push('/assets');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

  return (
    <CenteredForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="email">
        E-mail:
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
