import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import StatementTable from '../components/bank/StatementTable';

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

const intlValue = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(210);
const intlValueTwo = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(-10);

describe('Statement Table test.', () => {
  it('If "Data" table header is displayed.', () => {
    render(<StatementTable transactions={transactions} />);
    const dateTableHeader = screen.getByRole('columnheader', { name: 'Data' });
    expect(dateTableHeader).toBeInTheDocument();
  });

  it('If "Descrição" table header is displayed.', () => {
    render(<StatementTable transactions={transactions} />);
    const descriptionTableHeader = screen.getByRole('columnheader', { name: 'Descrição' });
    expect(descriptionTableHeader).toBeInTheDocument();
  });

  it('If "Valor" table header is displayed.', () => {
    render(<StatementTable transactions={transactions} />);
    const valueTableHeader = screen.getByRole('columnheader', { name: 'Valor' });
    expect(valueTableHeader).toBeInTheDocument();
  });

  it('If first transaction\'s date is displayed.', () => {
    render(<StatementTable transactions={transactions} />);
    const acaoText = screen.getByRole('cell', { name: '19/07/2022' });
    expect(acaoText).toBeInTheDocument();
  });
  it('If first transaction\'s description is displayed', () => {
    render(<StatementTable transactions={transactions} />);
    const acaoText = screen.getByRole('cell', { name: 'Depósito' });
    expect(acaoText).toBeInTheDocument();
  });
  it('If first transaction\'s value is displayed', () => {
    render(<StatementTable transactions={transactions} />);
    const acaoText = screen.getByRole('cell', { name: intlValue });
    expect(acaoText).toBeInTheDocument();
  });

  it('If "Data" text is displayed.', () => {
    render(<StatementTable transactions={transactions} />);
    const acaoText = screen.getByRole('cell', { name: '16/07/2022' });
    expect(acaoText).toBeInTheDocument();
  });
  it('If "Data" text is displayed.', () => {
    render(<StatementTable transactions={transactions} />);
    const acaoText = screen.getByRole('cell', { name: 'Retirada' });
    expect(acaoText).toBeInTheDocument();
  });
  it('If "Data" text is displayed.', () => {
    render(<StatementTable transactions={transactions} />);
    const acaoText = screen.getByRole('cell', { name: intlValueTwo });
    expect(acaoText).toBeInTheDocument();
  });
});
