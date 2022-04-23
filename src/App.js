import React, { useState, useEffect } from "react";
import "./App.css";
import Gifs from "./components/Gif";
import getGifs from "./services/getGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: "golden retrive" }).then((gifs) => setGifs(gifs));
  }, []);
  return (
    <div className="App">
      <section className="App-content">
        {gifs.map(({ title, id, url }) => (
          <Gifs id={id} url={url} title={title} key={id} />
        ))}
        <button onClick={() => setGifs()}>Change</button>
      </section>
    </div>
  );
}

export default App;
