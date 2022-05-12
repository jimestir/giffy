import React from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";

function SearchResults({ params }) {
  const { keyword } = params;
  const { gifs, loading } = useGifs({ keyword });

  return (
    <>
      <h1>{decodeURI(keyword)}</h1>
      <ListOfGifs gifs={gifs} loading={loading} />
    </>
  );
}

export default SearchResults;
