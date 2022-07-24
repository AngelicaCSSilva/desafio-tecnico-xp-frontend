import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import StockTableHead from '../components/stocks/StocksTableHead';

describe('Loader test.', () => {
  it('If Ação text is displayed.', () => {
    render(<StockTableHead />);
    const acaoText = screen.getByRole('columnheader', { name: 'Ação' });
    expect(acaoText).toBeInTheDocument();
  });
  it('If Qtde. text is displayed.', () => {
    render(<StockTableHead />);
    const qtdText = screen.getByRole('columnheader', { name: 'Qtde.' });
    expect(qtdText).toBeInTheDocument();
  });
  it('If Valor (R$) text is displayed.', () => {
    render(<StockTableHead />);
    const valorText = screen.getByRole('columnheader', { name: 'Valor (R$)' });
    expect(valorText).toBeInTheDocument();
  });
  it('If Operação text is displayed.', () => {
    render(<StockTableHead />);
    const operaçãoText = screen.getByRole('columnheader', { name: 'Operação' });
    expect(operaçãoText).toBeInTheDocument();
  });
});
