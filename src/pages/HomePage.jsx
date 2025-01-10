import { useEffect, useState } from "react";
import { getMovies } from "../api";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getMovies();
      setMovies(response);
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
