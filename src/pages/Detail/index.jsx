import React from "react";
import Gif from "components/Gif";
import useSingleGif from "hooks/useSingleGif";
import { Redirect } from "wouter";
import Spinner from "components/Spinner";
import { SpinnerContainer } from "styledComponents";

function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  if (isLoading)
    return (
      <SpinnerContainer height="50vh">
        <Spinner />
      </SpinnerContainer>
    );
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <h3>{decodeURI(gif.title)}</h3>
      <Gif {...gif} />
    </>
  );
}

export default Detail;
