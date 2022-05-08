import React, { useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import Category from "../../components/Category";
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

      <h3>Ultima busqueda</h3>
      <ListOfGifs gifs={gifs} loading={loading} />

      <Category name="Los gifs mas populares" options={POUPLUAR_GIFS} />
    </>
  );
}

export default Home;
