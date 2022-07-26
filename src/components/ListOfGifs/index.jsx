import Spinner from "components/Spinner";
import React from "react";
import Gif from "../Gif";
import { ListOfGifsStyled } from "./style";
import { SpinnerContainer } from "../../styledComponents";
function ListOfGifs({ gifs, loading }) {
  return loading ? (
    <SpinnerContainer height="100vh">
      <Spinner />
    </SpinnerContainer>
  ) : (
    <ListOfGifsStyled>
      {gifs.map(({ title, id, url }) => (
        <Gif id={id} url={url} title={title} key={id} />
      ))}
    </ListOfGifsStyled>
  );
}

export default ListOfGifs;
