import React from 'react';
import { DefaultCard, CardList, CardListItem, HeadingSection, Container } from '../components';
import { AppStateProps } from '../App';

export const Home = ({ appState }: {
  appState: AppStateProps
}) => {
  const dispalyContent = () => {
    if (appState.isFetching) return <p>Loading...</p>;
    if (appState.error) return <p>Oops, something went wrong...</p>

    return <CardList>
      <CardListItem>
        <DefaultCard url='series' title="Series" />
      </CardListItem>
      <CardListItem>
        <DefaultCard url='movie' title="Movies" />
      </CardListItem>
    </CardList>
  };

  return <>
    <HeadingSection heading="Popular Titles" />
    <Container>
      {dispalyContent()}
    </Container>
  </>
};

export default Home;
