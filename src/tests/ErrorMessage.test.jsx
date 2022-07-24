import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import ErrorMessage from '../components/error/ErrorMessage';

describe('ErrorMessage test.', () => {
  it('If ErrorMessage renders with message.', () => {
    render(<ErrorMessage error="Teste da mensagem de erro." />);
    const errorMessage = screen.getByText('Teste da mensagem de erro.');
    expect(errorMessage).toBeInTheDocument();
  });
});
