import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Movie from "./Movie";

const MovieList = () => {
  const { movies, loading, searchTerm } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (!searchTerm) {
    return (
      <h2 style={{ marginTop: "10rem" }} className="section-title">
        Search Something ASAP!
      </h2>
    );
  }

  if (movies.length < 1) {
    return <h2 className="section-title">No Movies Matched Your Search!</h2>;
  }
  return (
    <section className="section">
      <h2 style={{ letterSpacing: "4px" }} className="section-title">
        Movies
      </h2>
      <div className="movies-center">
        {movies.map((item) => {
          if (item) {
            return <Movie key={item.id} {...item} />;
          }
          return "";
        })}
      </div>
    </section>
  );
};

export default MovieList;
