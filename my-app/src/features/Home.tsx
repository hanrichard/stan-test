import React, { useState, useEffect } from 'react';
import { DefaultCard } from '../components/defaultCard/DefaultCard';
import { CardList } from '../components/cardList/CardList';

const MOVIE_TYPE = {
  SERIES: 'series',
  MOVIES: 'movie'
};

const filterResult = (array: any, type: string) => {
  return array?.entries.filter((item: any) => {
    return item.programType === type && item.releaseYear >= 2010
  }).slice(0, 21).sort((a: any, b: any) => a.title.localeCompare(b.title));
};

export const Home = () => {
  const [data, setData] = useState<any>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/sample.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsFetching(false);
      }).catch((err: any) => {
        setError(err);
        setIsFetching(false);
      });
  }, [])

  if (isFetching) return <p>Loading...</p>;

  if (error) return <p>Oops, something went wrong...</p>

  if (data) {
    return <CardList>
      <DefaultCard url='series' title="Series" />
      <DefaultCard url='movies' title="Movies" />
    </CardList>
  }

  return <></>;
}
export default Home;
