import React from "react";
import { GifStyled } from "./styledComponents";

function Gif({ title, id, url }) {
  return (
    <GifStyled>
      <a href={`#${id}`}>
        <h4>{title}</h4>
        <img alt={title} src={url} key={id} />
      </a>
    </GifStyled>
  );
}

export default Gif;
