import SearchForm from "components/SearchForm";
import React from "react";
import { Helmet } from "react-helmet";
import useSingleGif from "hooks/useSingleGif";
import Gif from "components/Gif";
import { Header } from "pages/Home";
import { Title } from "styledComponents";

const id = "14uQ3cOFteDaU";

function Error() {
  const { gif, isLoading, isError } = useSingleGif({ id: id });

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      {/* <SearchForm /> */}
      <Header />
      <Title>Error not a found</Title>
      <Gif {...gif} />
    </>
  );
}

export default Error;
