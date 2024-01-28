import React from 'react';
import { render, screen } from '@testing-library/react';
import { Category } from './CategoryPage';
import { MemoryRouter } from "react-router-dom";
import { customRender } from '../test/test-utils';

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

test('renders Detail page', async () => {
  await customRender(<Category appState={{
    isFetching: false,
    data: {
      total: 1,
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
  }} />, {
    routing: {
      path: '/:cat',
      route: '/series'
    }
  });

  expect(await screen.findByText(/Popular Series/i)).toBeInTheDocument();
  expect(await screen.findByText(/Rake/i)).toBeInTheDocument();
});
