import { useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";
import GifsContext from "contexts/GifsContext";

const KEY = "lastKeyword";
const INITIAL_PAGE = 0;

function useGifs(
  { keyword, language, rating } = {
    keyword: localStorage.getItem(KEY) || "null",
  }
) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setloadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse = keyword || localStorage.getItem(KEY) || "random";

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse, rating, language }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem(KEY, keyword);
    });
  }, [keyword, keywordToUse, language, rating, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setloadingNextPage(true);

    getGifs({ keyword: keywordToUse, language, page, rating }).then(
      (nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setloadingNextPage(false);
      }
    );
  }, [keywordToUse, language, rating, page, setGifs, setloadingNextPage]);

  return {
    gifs,
    loading,
    loadingNextPage,
    setPage,
  };
}

export default useGifs;
