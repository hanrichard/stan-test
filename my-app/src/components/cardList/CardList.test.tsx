import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardList } from './CardList';

test('renders loading...', () => {
  render(<CardList><li>test</li></CardList>);
  const text = screen.getByText(/test/i);
  expect(text).toBeInTheDocument();
});
