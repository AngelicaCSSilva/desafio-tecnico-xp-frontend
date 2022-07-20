import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import Logo from '../components/img/Logo';

describe('Logo test.', () => {
  it('If Logo renders.', () => {
    render(<Logo width="200px" />);
    const xpLogo = screen.getByRole('img');
    expect(xpLogo).toBeInTheDocument();
  });

  it('If Logo has alt text.', () => {
    render(<Logo width="200px" />);
    const xpLogo = screen.getByRole('img');
    expect(xpLogo.alt).toBe('Logo da XP Investimentos');
  });

  it('If Logo renders.', () => {
    render(<Logo width="200px" />);
    const xpLogo = screen.getByRole('img');
    expect(xpLogo).toHaveAttribute('width', '200px');
  });
});
