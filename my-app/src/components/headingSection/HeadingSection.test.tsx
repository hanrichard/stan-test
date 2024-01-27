import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeadingSection } from './HeadingSection';

test('renders loading...', () => {
  render(<HeadingSection heading="heading" />);
  const text = screen.getByText(/heading/i);
  expect(text).toBeInTheDocument();
});
