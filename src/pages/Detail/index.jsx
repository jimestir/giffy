import React from "react";
import Gif from "components/Gif";
import useGlobalGifs from "hooks/useGlobalGifs";

function Detail({ params }) {
  const { id } = params;

  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === id);

  return <Gif {...gif} />;
}

export default Detail;
