import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import { StyledTable } from '../components/stocks/styles/StyledTable.style';

describe('Styled Table test.', () => {
  it('If styled table renders.', () => {
    render(<StyledTable />);
    const styledTable = screen.getByRole('table');
    expect(styledTable).toBeInTheDocument();
  });
});
