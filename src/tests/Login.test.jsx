import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('Login page test.', () => {
  it('An input for email is displayed on the screen.', () => {
    render(<Login />, {wrapper: BrowserRouter})
    const emailInput = screen.getByRole('textbox', { id: /email/i });
    expect(emailInput).toBeInTheDocument();
  });
});
