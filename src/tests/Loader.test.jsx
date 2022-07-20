import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import Loader from '../components/loader/Loader';

describe('Loader test.', () => {
  it('If Loader renders.', () => {
    render(<Loader />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
