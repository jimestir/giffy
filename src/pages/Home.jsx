import React from "react";
import { Link } from "wouter";

const POUPLUAR_GIFS = ["Venezuela", "rick", "dog", "cat"];

function Home(props) {
  return (
    <>
      <h3>Los gifs más populares</h3>
      <ul>
        {POUPLUAR_GIFS.map((popularGifs) => {
          return (
            <li key={popularGifs}>
              <Link to={`/search/${popularGifs}`}>Gifs de {popularGifs}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
