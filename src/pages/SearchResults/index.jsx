import React, { useCallback, useEffect, useRef } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

function SearchResults({ params }) {
  const { keyword } = params;
  const { gifs, loading, loadingNextPage, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    distance: "200px",
    externalRef: loading ? null : externalRef,
    once: false,
  });

  // const handleNextPage = () => setPage((prevPage) => prevPage + 1);

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
      <h1>{decodeURI(keyword)}</h1>
      <ListOfGifs gifs={gifs} loading={loading} />
      {loadingNextPage ? <i>cargando...</i> : <div ref={externalRef}></div>}
      {/* <button onClick={handleNextPage}>Next Page</button> */}
    </>
  );
}

export default SearchResults;
