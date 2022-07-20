import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import OperationButton from '../components/button/OperationButton';

describe('Operation Button test.', () => {
  it('If receives "Compra" as operationType, must have "Compra" text.', () => {
    render(<OperationButton operationType="Compra" />);
    const emailInput = screen.getByRole('button', { name: /Compra/i });
    expect(emailInput).toBeInTheDocument();
  });

  it('If receives "Venda" as operationType, must have "Venda" text.', () => {
    render(<OperationButton operationType="Venda" />);
    const emailInput = screen.getByRole('button', { name: /Venda/i });
    expect(emailInput).toBeInTheDocument();
  });
});
