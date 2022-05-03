import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

function SearchResults({ params }) {
  const { keyword } = params;
  const { gifs, loading } = useGifs({ keyword });

  return <>{loading ? <i>Cargando...</i> : <ListOfGifs gifs={gifs} />}</>;
}

export default SearchResults;
