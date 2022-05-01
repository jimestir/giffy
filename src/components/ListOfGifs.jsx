import React from "react";
import Gif from "./Gif";
import { ListOfGifsStyled } from "./styledComponents";

function ListOfGifs({ gifs }) {
  console.log(gifs);
  return (
    <ListOfGifsStyled>
      {gifs.map(({ title, id, url }) => (
        <Gif id={id} url={url} title={title} key={id} />
      ))}
    </ListOfGifsStyled>
  );
}

export default ListOfGifs;
