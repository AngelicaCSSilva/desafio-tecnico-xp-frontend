import '@testing-library/jest-dom';
import {
  render, screen,
} from '@testing-library/react';
import user from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';

describe('App page test.', () => {
  it('If App renders login page.', async () => {
    render(<App />, { wrapper: BrowserRouter });
    const enterButton = screen.getByRole('button', { name: /Acessar/i });

    const emailInput = screen.getByLabelText('E-mail:');
    await user.type(emailInput, 'teste@xp.com');

    const passwordInput = screen.getByLabelText('Senha:');
    await user.type(passwordInput, '1234567');

    expect(enterButton).not.toBeDisabled();
  });
});
