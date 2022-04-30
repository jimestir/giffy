import React from "react";
import { Ul, LinkStyled } from "../../components/styledComponents";

const POUPLUAR_GIFS = ["pocoyo", "Venezuela", "rick", "dog", "cat"];

function Home(props) {
  return (
    <>
      <h3>Los gifs más populares</h3>
      <Ul>
        {POUPLUAR_GIFS.map((popularGifs) => {
          return (
            <li key={popularGifs}>
              <LinkStyled to={`/search/${popularGifs}`}>
                Gifs de {popularGifs}
              </LinkStyled>
            </li>
          );
        })}
      </Ul>
    </>
  );
}

export default Home;
