import React, { useState, useEffect } from "react";
import "./App.css";
import getGifs from "./services/getGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: "panda" }).then((gifs) => setGifs(gifs));
  }, []);
  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <div>
            <h4>{singleGif.title}</h4>
            <small>{singleGif.id}</small>
            <img alt={singleGif.title} src={singleGif.url} />
          </div>
        ))}
        <button onClick={() => setGifs()}>Change</button>
      </section>
    </div>
  );
}

export default App;
