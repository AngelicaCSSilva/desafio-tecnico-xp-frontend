import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import Modal from '../components/modal/Modal';

describe('Modal test.', () => {
  it('If modal container renders.', () => {
    render(<Modal />);
    const modal = screen.getByTestId('modal-container');
    expect(modal).toBeInTheDocument();
  });
});
