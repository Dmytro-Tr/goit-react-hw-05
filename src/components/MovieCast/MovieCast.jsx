import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../../api";

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
      MovieCast
      <ul>
        {movieCast.map((item) => {
          return (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w92/${item.profile_path}`}
                alt=""
              />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
