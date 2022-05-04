import React from "react";

function Detail({ params }) {
  const { id } = params;

  return <h1>Gif con id {id}</h1>;
}

export default Detail;
