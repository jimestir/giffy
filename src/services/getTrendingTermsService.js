import { API_KEY, API_URL } from "./settings";

const formApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  console.log(data);
  return data;
};

function getTrendingTerms() {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(formApiResponseToGifs)
    .catch((error) => console.log(error));
}

export default getTrendingTerms;
