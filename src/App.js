import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Div, Section } from "./styleComponents";
import "./App.css";

function App() {
  return (
    <Div className="App">
      <Section className="App-content">
        <ListOfGifs keyword="panda" />
      </Section>
    </Div>
  );
}

export default App;
