import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './features/Home';
import { Movies } from './features/Movies';
import { Layout } from './components/layout/Layout';

export const MOVIE_TYPE = {
  SERIES: 'series',
  MOVIES: 'movie'
};

export interface DataProps {
  total: number;
  entries: EntreisProps[];
}

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
}

export interface AppStateProps {
  isFetching: boolean;
  error?: string;
  data?: DataProps;
}

export const App = () => {
  const [appState, setAppState] = useState<AppStateProps>({
    data: undefined,
    isFetching: true,
    error: undefined
  })

  useEffect(() => {
    fetch("http://localhost:3000/sample.json")
      .then((res) => {
        if (!res.ok) {
          !appState.error && setAppState({
            ...appState,
            isFetching: false,
            error: 'error'
          })
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then((data) => {
        !appState.data && setAppState({
          ...appState,
          isFetching: false,
          data: data
        });
      }).catch((err) => {
        !appState.error && setAppState({
          ...appState,
          isFetching: false,
          error: err
        })
      });
    // @ts-ignore: Unreachable code error
  }, [appState])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home appState={appState} />} />
          <Route path="/series" element={<Movies title={MOVIE_TYPE.SERIES} appState={appState} />} />
          <Route path="/movies" element={<Movies title={MOVIE_TYPE.MOVIES} appState={appState} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
