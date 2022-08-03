import React from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { Main, Section, Aside } from "./style";
import { Header as HR, Title, Logo } from "../../styledComponents";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import logoInvert from "../../assets/logo_invert.jpg";

export function Header(props) {
  const {
    initialKeyword = "",
    initialLanguage = "en",
    initialRating = "g",
  } = props;
  return (
    <HR>
      <Link to="/">
        <figure>
          <Logo src={logoInvert} alt="Giffy logo" />
        </figure>
      </Link>
      <SearchForm
        initialKeyword={initialKeyword}
        initialLanguage={initialLanguage}
        initialRating={initialRating}
      />
    </HR>
  );
}

function Home() {
  const { gifs, loading } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
        <link rel="canonical" href="https://giffy-cool.vercel.app/" />
      </Helmet>

      <Header />

      <Main>
        <Section>
          <Title>Last Search</Title>
          <ListOfGifs gifs={gifs} loading={loading} />
        </Section>
        <Aside>
          <TrendingSearches />
        </Aside>
      </Main>
    </>
  );
}

export default Home;
