import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '../components/footer/Footer';

describe('Footer test.', () => {
  it('If Footer has link "Ações"', () => {
    render(<Footer />, { wrapper: BrowserRouter });
    const linkInvestimentos = screen.getByRole('link', { name: /Investimentos/i });
    expect(linkInvestimentos).toBeInTheDocument();
  });

  it('If Footer has link "Conta"', () => {
    render(<Footer />, { wrapper: BrowserRouter });
    const linkConta = screen.getByRole('link', { name: /Conta/i });
    expect(linkConta).toBeInTheDocument();
  });
});
