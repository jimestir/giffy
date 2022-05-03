import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

const KEY = "lastKeyword";

function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // get keyword of localStorage
    const keywordToUse = keyword || localStorage.getItem(KEY) || "random";
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      // save the keyword in the localStorage
      localStorage.setItem(KEY, keyword);
    });
  }, [keyword]);

  return { gifs, loading };
}

export default useGifs;
