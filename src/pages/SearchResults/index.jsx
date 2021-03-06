import React, { useCallback, useEffect, useRef } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { TitleSearchResult } from "./styled";

function SearchResults({ params }) {
  const { keyword } = params;
  const { gifs, loading, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    distance: "200px",
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandelNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(
    function () {
      if (isNearScreen) return debounceHandelNextPage();
    },
    [isNearScreen, debounceHandelNextPage]
  );

  return (
    <>
      <TitleSearchResult>{decodeURI(keyword)}</TitleSearchResult>
      <ListOfGifs gifs={gifs} loading={loading} />
      <div ref={externalRef}></div>
    </>
  );
}

export default SearchResults;
