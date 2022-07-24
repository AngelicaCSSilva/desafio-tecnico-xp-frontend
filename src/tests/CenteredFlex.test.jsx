import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import { CenteredFlex } from '../components/divs/CenteredFlex';

describe('Footer test.', () => {
  it('If Footer has link "Ações"', () => {
    render(<CenteredFlex data-testid="testid" />);
    const linkAcoes = screen.getByTestId('testid');
    expect(linkAcoes).toBeInTheDocument();
  });
});
