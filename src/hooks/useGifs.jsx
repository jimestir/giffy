import { useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

const KEY = "lastKeyword";

function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);
    const keywordToUse = keyword || localStorage.getItem(KEY) || "random";
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem(KEY, keyword);
    });
  }, [keyword, setGifs]);

  return { gifs, loading };
}

export default useGifs;
