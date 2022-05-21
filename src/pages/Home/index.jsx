import React, { useCallback } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

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
      <h3>Ultima busqueda</h3>
      <ListOfGifs gifs={gifs} loading={loading} />

      <TrendingSearches />
    </>
  );
}

export default Home;
