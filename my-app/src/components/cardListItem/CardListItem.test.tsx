import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardListItem } from './CardListItem';

test('renders loading...', () => {
  render(<CardListItem>test</CardListItem>);
  const text = screen.getByText(/test/i);
  expect(text).toBeInTheDocument();
});
