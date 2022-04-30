import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Logo, Section } from "./components/styledComponents";
import { Route, Link } from "wouter";
import Home from "./pages/Home";
import logoInvert from "./assets/logo_invert.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Section className="App-content">
        <Link to="/">
          <figure>
            <Logo alt="Giffy logo" src={logoInvert} />
          </figure>
        </Link>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={ListOfGifs} />
        <Route path="/gif/:id" />
      </Section>
    </div>
  );
}

export default App;
