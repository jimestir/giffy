import React, { useState } from "react";
import { useLocation } from "wouter";
import { Ul, LinkStyled } from "../../components/styledComponents";

const POUPLUAR_GIFS = ["pocoyo", "Venezuela", "rick", "dog", "cat"];

function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  console.log(path);

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
