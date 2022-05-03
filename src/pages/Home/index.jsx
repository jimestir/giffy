import React, { useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import { Ul, LinkStyled } from "../../components/styledComponents";
import useGifs from "../../hooks/useGifs";

const POUPLUAR_GIFS = ["pocoyo", "Venezuela", "rick", "dog", "cat"];

function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { gifs, loading } = useGifs();

  const handleSubmit = (event) => {
    event.preventDefault();
    //navegar a otra router
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <button type="submit">search</button>
      </form>

      <h3>Ultima busqueda ...</h3>
      <ListOfGifs gifs={gifs} />

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
