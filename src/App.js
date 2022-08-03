import React from "react";
import { LayoutContainer } from "./styledComponents";
import { Route } from "wouter";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { GifContextProvider } from "./contexts/GifsContext";
import theme from "styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LayoutContainer>
          <GifContextProvider>
            <Route component={Home} path="/" />
            <Route
              component={SearchResults}
              path="/search/:keyword/:rating?/:language?"
            />
            <Route component={Detail} path="/gif/:id" />
            <Route component={Error} path="/404" />
          </GifContextProvider>
        </LayoutContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
