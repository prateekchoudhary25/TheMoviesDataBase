import React from "react";
import { Link } from "react-router-dom";
const Movie = ({ id, title, image, rating }) => {
  // const NOIMG =
  //   "https://www.carnival.com/_ui/responsive/ccl/assets/images/notfound_placeholder.svg";

  // console.log(image);
  return (
    <Link to={`/movie/${id}`}>
      <article className="movies">
        <div className="img-container">
          <img src={image} alt={title} />
        </div>
        <div className="img-footer">
          <h3>{title}</h3>
          <span
            className={`${
              rating <= 6 ? "red" : rating <= 8 ? "orange" : "green"
            }`}
          >
            {rating}
          </span>
        </div>
      </article>
    </Link>
  );
};

export default Movie;
