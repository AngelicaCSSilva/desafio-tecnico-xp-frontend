import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import Balance from '../components/bank/Balance';

const transactions = [
  {
    date: '2022-07-19T06:34:00.871Z',
    description: 'Depósito',
    total: 210,
  },
  {
    date: '2022-07-16T06:35:00.871Z',
    description: 'Retirada',
    total: -10,
  },
];

describe('Balance test.', () => {
  it('If Balance renders with "SALDO:" text.', () => {
    render(<Balance transactions={transactions} />);
    const balanceMessage = screen.getByText('SALDO:');
    expect(balanceMessage).toBeInTheDocument();
  });

  it('If Balance renders with "SALDO:" text.', () => {
    render(<Balance transactions={transactions} />);
    const balance = screen.getByText('R$ 200,00');
    expect(balance).toBeInTheDocument();
  });
});
