import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovieById } from "../api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(`movieId: ${movieId}`);
  const [movieById, setMovieById] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getMovieById(movieId);
      setMovieById(data);
    };
    getData();
  }, [movieId]);

  if (!movieById) {
    return <h2>Loading..</h2>;
  }

  // console.log(`Search poster: ${movieById.poster_path}`);

  return (
    <div>
      <h2>MovieDetailsPage</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${movieById.poster_path}`} />
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
