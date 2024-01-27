import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container } from './Container';

test('renders loading...', () => {
  render(<Container>test</Container>);
  const text = screen.getByText(/test/i);
  expect(text).toBeInTheDocument();
});
