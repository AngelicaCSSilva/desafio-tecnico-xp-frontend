import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import { CenteredFlex } from '../components/divs/CenteredFlex';

describe('Centered Flex div test.', () => {
  it('If Centered Flex div renders.', () => {
    render(<CenteredFlex data-testid="testid" />);
    const linkAcoes = screen.getByTestId('testid');
    expect(linkAcoes).toBeInTheDocument();
  });
});
