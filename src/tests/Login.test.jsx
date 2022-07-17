import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('Login page test.', () => {
  it('An input for email is displayed on the screen.', () => {
    render(<Login />, {wrapper: BrowserRouter})
    const emailInput = screen.getByRole('textbox', { id: /email/i });
    expect(emailInput).toBeInTheDocument();
  });

it('An input for a password is displayed on the screen.', () => {
  render(<Login />, {wrapper: BrowserRouter})
  const passwordInput = screen.getByRole('textbox', { id: /password/i });
  expect(passwordInput).toBeInTheDocument();
});

it('An login button appears on the screen.', () => {
  render(<Login />, {wrapper: BrowserRouter})
  const enterButton = screen.getByRole('button', { name: /Acessar/i });
  expect(enterButton).toBeInTheDocument();
});

it('Access button remains disabled '
+ 'when entering invalid information.', async  () => {
  render(<Login />, {wrapper: BrowserRouter})

  const emailInput = screen.getByLabelText('Email:');
  await user.type(emailInput, 'aaa.co@m');
  
  const passwordInput = screen.getByLabelText('Senha:');
  await user.type(passwordInput, '1234')

  expect(emailInput).toHaveValue('aaa.co@m');
  expect(passwordInput).toHaveValue('1234');

  const enterButton = screen.getByRole('button', { name: /Acessar/i });
  expect(enterButton).toBeDisabled();
});
});
