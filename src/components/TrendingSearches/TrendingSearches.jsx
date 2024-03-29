import React, { useEffect, useState } from "react";
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "components/Category";
import { Nav } from "./style";

function TrendingSearches() {
  const [trens, setTrens] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrens);
  }, []);

  return (
    <Nav>
      <Category name="Trending" options={trens} />
    </Nav>
  );
}

export default TrendingSearches;
