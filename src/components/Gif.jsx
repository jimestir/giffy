import React from "react";

function Gifs({ title, id, url }) {
  return (
    <>
      <h4>{title}</h4>
      <img alt={title} src={url} />
    </>
  );
}

export default Gifs;
