import React, { useEffect, useState } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import getGifs from "../../services/getGifs";

function SearchResults({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoanding] = useState(false);
  useEffect(() => {
    setLoanding(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoanding(false);
    });
  }, [keyword]);
  return <>{loading ? <i>Cargando...</i> : <ListOfGifs gifs={gifs} />}</>;
}

export default SearchResults;
