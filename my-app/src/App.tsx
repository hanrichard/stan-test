import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './features/Home';
import { Category } from './features/CategoryPage';
import { Layout } from './components/layout/Layout';

export const MOVIE_TYPE = {
  SERIES: 'series',
  MOVIES: 'movie'
};

export interface DataProps {
  total: number;
  entries: EntreisProps[];
};

export interface EntreisProps {
  title: string;
  description: string;
  programType: string;
  images: {
    'Poster Art': {
      url: string;
      width: number;
      height: number;
    }
  }
  releaseYear: number;
};

export interface AppStateProps {
  isFetching: boolean;
  error?: string;
  data?: DataProps;
};

export const App = () => {
  const [appState, setAppState] = useState<AppStateProps>({
    data: undefined,
    isFetching: true,
    error: undefined
  })

  const handleFetchData = async () => {
    const response = await fetch("http://localhost:3000/sample.json")
    if (!response.ok) {
      setAppState({
        ...appState,
        isFetching: false,
        error: 'error'
      })
      throw new Error(response.statusText)
    }

    try {
      const data = await response.json();
      setAppState({
        ...appState,
        isFetching: false,
        data: data
      });
    } catch (err) {
      setAppState({
        ...appState,
        isFetching: false,
        error: 'error'
      })
    }
  }

  useEffect(() => {
    handleFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home appState={appState} />} />
          <Route path="/:cat" element={<Category appState={appState} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
