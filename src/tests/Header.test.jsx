import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../components/header/Header';

describe('Footer test.', () => {
  it('If Footer has link "Ações"', () => {
    render(<Header />, { wrapper: BrowserRouter });
    const logoutButton = screen.getByRole('button', { name: /Sair/i });
    expect(logoutButton).toBeInTheDocument();
  });

  it('If Footer has link "Ações"', () => {
    render(<Header />, { wrapper: BrowserRouter });
    const greetingMessage = screen.getByText(/Olá, undefined/i);
    expect(greetingMessage).toBeInTheDocument();
  });
});
