import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Div, Section } from "./components/styledComponents";
import "./App.css";
import { Route } from "wouter";
import { Link } from "wouter";
import Home from "./pages/Home";
import logoInvert from "./assets/logo_invert.jpg";

function App() {
  return (
    <Div className="App">
      <Section className="App-content">
        <Link to="/">
          <figure>
            <img alt="Giffy logo" src={logoInvert} />
          </figure>
        </Link>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={ListOfGifs} />
        <Route path="/gif/:id" />
      </Section>
    </Div>
  );
}

export default App;
