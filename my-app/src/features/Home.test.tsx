import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Home from './Home';

test('renders loading...', () => {
  render(<Home appState={{
    isFetching: true,
    data: undefined,
    error: undefined
  }} />);
  const fetchingText = screen.getByText(/Loading.../i);
  expect(fetchingText).toBeInTheDocument();
  const headingText = screen.getByText(/Popular Titles/i);
  expect(headingText).toBeInTheDocument();
});

test('renders error state', () => {
  render(<Home appState={{
    isFetching: false,
    data: undefined,
    error: 'error'
  }} />);
  const errorText = screen.getByText(/Oops, something went wrong.../i);
  expect(errorText).toBeInTheDocument();
});

test('renders error state', () => {
  render(<Home appState={{
    isFetching: false,
    data: undefined,
    error: 'error'
  }} />);
  const errorText = screen.getByText(/Oops, something went wrong.../i);
  expect(errorText).toBeInTheDocument();
});

test('renders correct data', () => {
  render(<MemoryRouter>
    <Home appState={{
      isFetching: false,
      data: {
        total: 75,
        entries: [
          {
            title: "Rake",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            programType: "series",
            images: {
              "Poster Art": {
                url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
                width: 1000,
                height: 1500
              }
            },
            releaseYear: 2010
          }]
      },
      error: undefined
    }} /></MemoryRouter>);
  const text = screen.getByText(/Popular Series/i);
  expect(text).toBeInTheDocument();
});
