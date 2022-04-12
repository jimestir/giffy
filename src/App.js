import React, { useState, useEffect } from "react";
import "./App.css";

const GIFS = [
  "https://media2.giphy.com/media/j0eRJzyW7XjMpu1Pqd/200w.webp?cid=ecf05e473qhu1vsnwfusq7jfl6dv76xzm5rxalf3innxph0i&rid=200w.webp&ct=g",
  "https://media1.giphy.com/media/krkrHAEodHgzP72rTI/200w.webp?cid=ecf05e473qhu1vsnwfusq7jfl6dv76xzm5rxalf3innxph0i&rid=200w.webp&ct=g",
];
const DIFERENT_GIFS = [
  "https://media1.giphy.com/media/hrcmLhw1VYMZzDtwM0/200w.webp?cid=ecf05e473qhu1vsnwfusq7jfl6dv76xzm5rxalf3innxph0i&rid=200w.webp&ct=g",
];

function App() {
  const [gifs, setGifs] = useState(GIFS);
  useEffect(() => {
    console.log("cambios realizados");
    setGifs(DIFERENT_GIFS);
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((gif) => (
          <img src={gif} />
        ))}
        <button onClick={() => setGifs(DIFERENT_GIFS)}>Change</button>
      </section>
    </div>
  );
}

export default App;
