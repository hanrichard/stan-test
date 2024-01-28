import React from 'react';
import { useParams } from 'react-router-dom';

import { Card, CardList, CardListItem, HeadingSection, Container } from '../components';
import { AppStateProps, DataProps, EntreisProps } from '../App';

const CATEGORY_TYPES: { [key: string]: string; } = {
  movie: 'Movies',
  series: 'Series'
};

const filterResult = (array: DataProps | undefined, type?: string) => {
  return array?.entries?.filter((item) => {
    return item?.programType === type && item.releaseYear >= 2010
  }).slice(0, 21).sort((a, b) => a.title.localeCompare(b.title));
};

export const Category = ({ appState }: {
  appState: AppStateProps
}) => {
  const { cat } = useParams();
  const heading = cat && CATEGORY_TYPES[cat];
  const data = filterResult(appState.data, cat);

  const dispalyContent = () => {
    if (appState.isFetching) return <p>Loading...</p>;
    if (appState.error) return <p>Oops, something went wrong...</p>
    if (!heading) return <p>No Category</p>;
    return <CardList>
      {data?.map((item: EntreisProps) => {
        return <CardListItem key={item.title}>
          <Card title={item.title} imageUrl={item.images['Poster Art'].url} />
        </CardListItem>
      })}
    </CardList>
  };

  return <>
    {heading && <HeadingSection heading={"Popular " + heading} />}
    <Container>
      {dispalyContent()}
    </Container>
  </>
};
