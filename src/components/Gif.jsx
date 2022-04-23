import React from "react";

function Gifs({ title, id, url }) {
  return (
    <>
      <h4>{title}</h4>
      <small>id</small>
      <img alt={title} src={url} key={id} />
    </>
  );
}

export default Gifs;
