import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Div, Section } from "./components/styledComponents";
import "./App.css";
import { Route } from "wouter";
import { Link } from "wouter";
import Home from "./pages/Home";

function App() {
  return (
    <Div className="App">
      <Section className="App-content">
        <h1>App</h1>
        <Link to="/">Logo</Link>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={ListOfGifs} />
        <Route path="/gif/:id" />
      </Section>
    </Div>
  );
}

export default App;
