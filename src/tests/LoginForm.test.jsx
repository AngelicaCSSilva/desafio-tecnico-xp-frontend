import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LoginForm from '../components/forms/LoginForm';

describe('Login Form test.', () => {
  it('Must have an email input.', () => {
    render(<LoginForm />, { wrapper: BrowserRouter });
    const emailInput = screen.getByRole('textbox', { id: /e-mail/i });
    expect(emailInput).toBeInTheDocument();
  });

  it('Must have an email input.', () => {
    render(<LoginForm />, { wrapper: BrowserRouter });
    const passwordInput = screen.getByRole('textbox', { id: /password/i });
    expect(passwordInput).toBeInTheDocument();
  });

  it('Must have an password input.', () => {
    render(<LoginForm />, { wrapper: BrowserRouter });
    const enterButton = screen.getByRole('button', { name: /Acessar/i });
    expect(enterButton).toBeInTheDocument();
  });

  it('Must have an login button.', () => {
    render(<LoginForm />, { wrapper: BrowserRouter });
    const enterButton = screen.getByRole('button', { name: /Acessar/i });
    expect(enterButton).toBeDisabled();
  });

  it('Access button remains disabled '
  + 'when entering invalid information.', async () => {
    render(<LoginForm />, { wrapper: BrowserRouter });

    const emailInput = screen.getByLabelText('E-mail:');
    await user.type(emailInput, 'aaa.co@m');

    const passwordInput = screen.getByLabelText('Senha:');
    await user.type(passwordInput, '1234');

    expect(emailInput).toHaveValue('aaa.co@m');
    expect(passwordInput).toHaveValue('1234');

    const enterButton = screen.getByRole('button', { name: /Acessar/i });
    expect(enterButton).toBeDisabled();
  });

  it('The access button is activated '
  + 'when valid information is entered.', async () => {
    render(<LoginForm />, { wrapper: BrowserRouter });
    const enterButton = screen.getByRole('button', { name: /Acessar/i });
    expect(enterButton).toBeDisabled();

    const emailInput = screen.getByLabelText('E-mail:');
    await user.type(emailInput, 'teste@xp.com');

    const passwordInput = screen.getByLabelText('Senha:');
    await user.type(passwordInput, '1234567');

    expect(emailInput).toHaveValue('teste@xp.com');
    expect(passwordInput).toHaveValue('1234567');

    expect(enterButton).not.toBeDisabled();
  });
});
