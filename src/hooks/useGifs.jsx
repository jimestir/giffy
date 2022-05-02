import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

function useGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return { gifs, loading };
}

export default useGifs;
