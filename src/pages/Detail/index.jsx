import React from "react";
import Gif from "components/Gif";
import useSingleGif from "hooks/useSingleGif";
import { Redirect } from "wouter";
import Spinner from "components/Spinner";
import { SpinnerContainer } from "styledComponents";
import { Helmet } from "react-helmet";

function Detail({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  const title = gif ? gif.title : "";

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <SpinnerContainer height="50vh">
          <Spinner />
        </SpinnerContainer>
      </>
    );
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title} || Giffy</title>
      </Helmet>
      <h3>{decodeURI(gif.title)}</h3>
      <Gif {...gif} />
    </>
  );
}

export default Detail;
