import React from 'react';
import { render, screen } from '@testing-library/react';
import { Category } from './CategoryPage';
import { MemoryRouter, Route, Routes } from "react-router-dom";

test('renders loading...', () => {
  render(<Category appState={{
    isFetching: true,
    data: undefined,
    error: undefined
  }} />);
  const fetchingText = screen.getByText(/Loading.../i);
  expect(fetchingText).toBeInTheDocument();
});

test('renders error state', () => {
  render(<Category appState={{
    isFetching: false,
    data: undefined,
    error: 'error'
  }} />);
  const errorText = screen.getByText(/Oops, something went wrong.../i);
  expect(errorText).toBeInTheDocument();
});
