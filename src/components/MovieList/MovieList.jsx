import { Link } from "react-router-dom";
import s from "./movieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={s.movies_list}>
      <ul className={s.list}>
        {movies.map((item) => (
          <li key={item.id}>
            <Link
              to={`/movies/${item.id}`}
              // to={`/movie/${item.id.toString()}`}
              className={s.link}
            >
              {item.title}
              {/* <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              ></img> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
