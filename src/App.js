import React from "react";
import { Logo, LayoutContainer } from "./styledComponents";
import { Route, Link } from "wouter";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import logoInvert from "./assets/logo_invert.jpg";
import { GifContextProvider } from "./contexts/GifsContext";
import theme from "styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LayoutContainer>
          <Link to="/">
            <figure>
              <Logo src={logoInvert} alt="Giffy logo" />
            </figure>
          </Link>
          <GifContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
          </GifContextProvider>
        </LayoutContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
