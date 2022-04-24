import React from "react";
import { StyledGif } from "./styledComponents";

function Gifs({ title, id, url }) {
  return (
    <StyledGif href={`#${id}`}>
      <h4>{title}</h4>
      <img alt={title} src={url} key={id} />
    </StyledGif>
  );
}

export default Gifs;
