import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '../components/footer/Footer';

describe('Footer test.', () => {
  it('If Footer has link "Ações"', async () => {
    render(<Footer />, { wrapper: BrowserRouter });
    const linkAcoes = screen.getByRole('link', { name: /Ações/i });
    expect(linkAcoes).toBeInTheDocument();
  });

  it('If Footer has link "Conta"', async () => {
    render(<Footer />, { wrapper: BrowserRouter });
    const linkConta = screen.getByRole('link', { name: /Conta/i });
    expect(linkConta).toBeInTheDocument();
  });
});
