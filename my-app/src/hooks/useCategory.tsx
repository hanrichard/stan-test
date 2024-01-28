import { useState, useEffect } from 'react';

export const MOVIE_TYPE = {
  SERIES: 'series',
  MOVIES: 'movie'
};

export interface DataProps {
  total?: number;
  entries?: EntreisProps[];
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

export const useCategory = () => {
  const [appState, setAppState] = useState<AppStateProps>({
    data: undefined,
    isFetching: true,
    error: undefined
  })

  const handleFetchData = async () => {
    const response = await fetch("http://localhost:3000/sample.json");

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
  };

  useEffect(() => {
    handleFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data: appState.data, isFetching: appState.isFetching, error: appState.error }
};
