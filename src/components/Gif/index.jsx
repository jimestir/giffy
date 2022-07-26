import React from "react";
import { Link } from "wouter";
import { GifStyled } from "./style";

function Gif({ title, id, url }) {
  return (
    <GifStyled>
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img alt={title} src={url} key={id} />
      </Link>
    </GifStyled>
  );
}

export default React.memo(Gif);
