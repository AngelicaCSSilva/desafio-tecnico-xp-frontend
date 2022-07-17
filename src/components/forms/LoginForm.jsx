import React, { useState } from 'react';
import { getLocalStorage } from '../../utils/localStorage';
import { CenteredForm } from './styles/CenteredForm';
import { StyledLabel } from './styles/StyledLabel';

export default function LoginForm() {
  const [user, setUser] = useState({
    email: getLocalStorage('lastUser')?.email || '',
    password: '',
  });

  return (
    <CenteredForm>
      <StyledLabel htmlFor="emailInput">
        Email:
        <input
          data-testid="email-input"
          id="email"
          type="text"
          value={user.email}
          name="email"
          onChange={
              ({ target: { value, name } }) => setUser({ ...user, [name]: value })
            }
        />
      </StyledLabel>
      <StyledLabel htmlFor="passwordInput">
        Senha:
        <input
          data-testid="password-input"
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
        data-testid="login-submit-btn"
      >
        Acessar
      </button>
    </CenteredForm>
  );
}
