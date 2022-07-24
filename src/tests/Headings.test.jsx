import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import { HeadingOne } from '../components/heading/HeadingOne.style';
import { HeadingTwo } from '../components/heading/HeadingTwo.style';

describe('Headings test.', () => {
  it('If Heading One renders.', () => {
    render(<HeadingOne>Teste</HeadingOne>);
    const headingText = screen.getByRole('heading', { level: 1, name: /Teste/i });
    expect(headingText).toBeInTheDocument();
  });

  it('If Heading Two renders.', () => {
    render(<HeadingTwo>Teste</HeadingTwo>);
    const headingText = screen.getByRole('heading', { level: 2, name: /Teste/i });
    expect(headingText).toBeInTheDocument();
  });
});
