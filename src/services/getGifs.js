import { API_KEY, API_URL } from "./settings";

const formApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  } else alert("Error not can't find gifs");
};

function getGifs({ keyword = "rick and morty" } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(formApiResponseToGifs)
    .catch((error) => console.log(error));
}

export default getGifs;
