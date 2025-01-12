import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../../api";
import s from "./movieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  // console.log(`movieCast: ${movieCast}`);

  useEffect(() => {
    const getData = async () => {
      const data = await getCredits(movieId);
      setMovieCast(data);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul className={s.list}>
        {movieCast.map((item) => {
          return (
            <li
              key={item.id}
              className={s.item}
            >
              <img
                src={`https://image.tmdb.org/t/p/w92/${item.profile_path}`}
                alt="No poster"
                className={s.img}
              />
              <p className={s.text}>{item.name}</p>
              <p className={s.text}>Character: {item.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
