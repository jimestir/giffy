import React from "react";
import Gif from "../Gif";
import { ListOfGifsStyled } from "./styled";

function ListOfGifs({ gifs, loading }) {
  return loading ? (
    <i Style="min-height: 100vh;">Cargando...</i>
  ) : (
    <ListOfGifsStyled>
      {gifs.map(({ title, id, url }) => (
        <Gif id={id} url={url} title={title} key={id} />
      ))}
    </ListOfGifsStyled>
  );
}

export default ListOfGifs;
