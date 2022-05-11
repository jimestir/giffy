import React, { useEffect, useState } from "react";
import getTrendingTerms from "../../services/getTrendingTermsService";
import Category from "../Category";

function TrendingSearches() {
  const [trens, setTrens] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrens);
  }, []);

  return <Category name="Tendencias" options={trens} />;
}

export default TrendingSearches;
