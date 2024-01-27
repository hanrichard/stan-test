import React from 'react';

import { Card, CardList, CardListItem, HeadingSection, Container } from '../components';
import { AppStateProps, DataProps, EntreisProps } from '../App';

const filterResult = (array: DataProps | undefined, type: string) => {
  return array?.entries?.filter((item) => {
    return item?.programType === type && item.releaseYear >= 2010
  }).slice(0, 21).sort((a, b) => a.title.localeCompare(b.title));
};

export const Movies = ({ title, appState }: {
  title: string, appState: AppStateProps
}) => {
  const data = filterResult(appState.data, title);

  const dispalyContent = () => {
    if (appState.isFetching) return <p>Loading...</p>;
    if (appState.error) return <p>Oops, something went wrong...</p>
    return <CardList>
      {data?.map((item: EntreisProps) => {
        return <CardListItem key={item.title}>
          <Card title={item.title} imageUrl={item.images['Poster Art'].url} />
        </CardListItem>
      })}
    </CardList>
  };

  return <>
    <HeadingSection heading={"Popular " + title} />
    <Container>
      {dispalyContent()}
    </Container>
  </>
};
