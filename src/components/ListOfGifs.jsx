import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";
import { ListOfGifsStyled } from "./styledComponents";

function ListOfGifs({ params }) {
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);
  const [loading, setLoanding] = useState(false);

  useEffect(() => {
    setLoanding(true);
    getGifs({ keyword }).then((gifs) => {
      setLoanding(false);
      setGifs(gifs);
    });
  }, [keyword]);
  if (loading) return <i>Cargando...</i>;

  return (
    <ListOfGifsStyled>
      {gifs.map(({ title, id, url }) => (
        <Gif id={id} url={url} title={title} key={id} />
      ))}
    </ListOfGifsStyled>
  );
}

export default ListOfGifs;
