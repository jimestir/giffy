import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Div, Section } from "./components/styledComponents";
import "./App.css";
import { Route } from "wouter";
import { Link } from "wouter";

function App() {
  return (
    <Div className="App">
      <Section className="App-content">
        <h1>App</h1>
        <Link href="/gif/bleach">bleach</Link>
        <Link href="/gif/one peach">one peach</Link>
        <Link href="/gif/madagascar"> madagascar</Link>
        <Link href="/gif/golden retrive">golden retrive</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </Section>
    </Div>
  );
}

export default App;
