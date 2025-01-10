import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovieById } from "../api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(`movieId: ${movieId}`);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getMovieById(movieId.toString());
      setMovie(response);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <h2>MovieDetailsPage</h2>
      <img src={`https://api.themoviedb.org/3/movie/${movie}`} />
      <h3> lalala</h3>
      <nav>
        <NavLink to="cast">MovieCast</NavLink>
        <NavLink to="reviews">MovieReviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
