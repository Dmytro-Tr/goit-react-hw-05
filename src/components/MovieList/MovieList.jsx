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
              className={s.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
