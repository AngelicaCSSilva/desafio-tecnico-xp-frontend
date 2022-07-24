import '@testing-library/jest-dom';
import {
  render, screen, waitFor, act,
} from '@testing-library/react';
import user from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';
import Assets from '../components/pages/Assets';
// import Login from '../components/pages/Login';
import assets from './mocks/assets';
import bank from './mocks/bank';
import users from './mocks/users';
import renderWithRouterAndProvider from './renderWithRouterAndProvider';

const resolvedUrl = (url) => {
  if (url === 'https://desafiobackend-angelica.herokuapp.com/users') {
    return users;
  }
  if (url === 'https://desafiobackend-angelica.herokuapp.com/1/assets') {
    return assets;
  }
  return bank;
};

const mockFetch = () => {
  global.fetch = jest.fn().mockImplementation((url) => Promise.resolve({
    status: 200,
    ok: true,
    json: () => Promise.resolve(resolvedUrl(url)),
  }));
};

describe('App page test.', () => {
  it('If App renders login page.', async () => {
    render(<App />, { wrapper: BrowserRouter });
    const enterButton = screen.getByRole('button', { name: /Acessar/i });

    const emailInput = screen.getByLabelText('Email:');
    await user.type(emailInput, 'teste@xp.com');

    const passwordInput = screen.getByLabelText('Senha:');
    await user.type(passwordInput, '1234567');

    expect(enterButton).not.toBeDisabled();
  });
});
