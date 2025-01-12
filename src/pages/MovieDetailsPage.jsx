import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieById } from "../api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  // console.log(`movieId: ${movieId}`);
  const [movieById, setMovieById] = useState(null);

  // console.log(`movieById:${movieById}`);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getMovieById(movieId);
      setMovieById(data);
    };
    getData();
  }, [movieId]);

  if (!movieById) {
    return <h2>Loading..</h2>;
  }

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300/${movieById.poster_path}`} />
      <h2>{movieById.title}</h2>
      <p>User Score: {movieById.popularity}%</p>
      <h3>Overview</h3>
      <p>{movieById.overview}</p>
      <h4>Genres</h4>
      <p>{movieById.genres.name}</p>
      <nav>
        <ul>
          <li>
            <Link to="cast">MovieCast</Link>
          </li>
          <li>
            <Link to="reviews">MovieReviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
