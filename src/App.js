import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL =
  "https://api.giphy.com/v1/gifs/search?api_key=6CUKWhv8ZLkdXLj17yTh7n340Z3tTxEf&q=panda&limit=10&offset=0&rating=g&lang=en";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        const { data = [] } = res;
        if (Array.isArray(data)) {
          const gifs = data.map((image) => image.images.downsized_medium.url);
          setGifs(gifs);
        } else alert("Error not can't find gifs");
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} />
        ))}
        <button onClick={() => setGifs()}>Change</button>
      </section>
    </div>
  );
}

export default App;
