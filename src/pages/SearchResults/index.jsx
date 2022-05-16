import React from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";

function SearchResults({ params }) {
  const { keyword } = params;
  const { gifs, loading, loadingNextPage, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      <h1>{decodeURI(keyword)}</h1>
      <ListOfGifs gifs={gifs} loading={loading} />
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
}

export default SearchResults;
