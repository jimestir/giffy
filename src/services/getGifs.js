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

function getGifs({ limit = 25, keyword = "rick and morty", page = 0 } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(formApiResponseToGifs)
    .catch((error) => console.log(error));
}

export default getGifs;
