import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWVhMDNiMWJlZDlhNGU2ZjRlNTIzZTUyMTY4MzNjYyIsIm5iZiI6MTczNjQzNjM0Ni4xOTI5OTk4LCJzdWIiOiI2NzdmZWE3YWVlODRmYTRkZWY3YWVkNTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VMmalfrNwCxM8X4gN7myxgoi80Ey_XEsSmkc5UVBMo0",
  },
};

fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

export const getMovies = async () => {
  const { data } = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return data.results;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return data;
};

export const getCredits = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return data;
};
