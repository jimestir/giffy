import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <Suspense fallback={"cargando..."}>
      <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches /> : <i>cargando...</i>}
      </div>
    </Suspense>
  );
}
