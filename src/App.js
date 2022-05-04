import React from "react";
import { Logo, Section } from "./components/styledComponents";
import { Route, Link } from "wouter";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import logoInvert from "./assets/logo_invert.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Section className="App-content">
        <Link to="/">
          <figure>
            <Logo src={logoInvert} alt="Giffy logo" />
          </figure>
        </Link>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </Section>
    </div>
  );
}

export default App;
