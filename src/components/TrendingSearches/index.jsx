import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";
import { SpinnerContainer } from "styledComponents";
const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <Suspense
      fallback={
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      }
    >
      <div style={{ height: "100%" }} ref={fromRef}>
        {isNearScreen ? (
          <TrendingSearches />
        ) : (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
      </div>
    </Suspense>
  );
}
