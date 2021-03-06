import React, { useCallback } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { TitleHome, Main, Section, Aside } from "./styled";

function Home() {
  const [path, pushLocation] = useLocation();
  const { gifs, loading } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <Main>
        <Section>
          <TitleHome>Last Search</TitleHome>
          <ListOfGifs gifs={gifs} loading={loading} />
        </Section>
        <Aside>
          <TrendingSearches />
        </Aside>
      </Main>
    </>
  );
}

export default Home;
