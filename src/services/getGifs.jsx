const apiKey = "6CUKWhv8ZLkdXLj17yTh7n340Z3tTxEf&q";

function getGifs({ keyword = "rick and morty" } = {}) {
  const API_URL = ` https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      const { data = [] } = res;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;
          return { title, id, url };
        });
        return gifs;
      } else alert("Error not can't find gifs");
    })
    .catch((error) => console.error(error));
}

export default getGifs;
