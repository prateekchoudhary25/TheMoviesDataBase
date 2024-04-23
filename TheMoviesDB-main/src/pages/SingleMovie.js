import React, { useState } from "react";

import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const BASE_IMGURL = "https://image.tmdb.org/t/p/w500";

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API = "?api_key=5418c26d241d7b9fc7181e6bab08796f";

const SingleMovie = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  // console.log(movie);
  const { id } = useParams();

  React.useEffect(() => {
    setLoading(true);
    async function getMovie() {
      try {
        const response = await fetch(`${BASE_URL}${id}${API}`);
        // console.log(`${BASE_URL}${id}${API}`);
        const data = await response.json();

        // console.log(data.genres);

        if (data) {
          const {
            poster_path: image,
            genres: genre,
            // id: id,
            original_title: title,
            overview: plot,
            release_date: rd,
            runtime: rt,
            vote_average: ratings,
          } = data;

          const newMovie = {
            image,
            genre,
            // id,
            title,
            plot,
            rd,
            rt,
            ratings,
          };
          // console.log(newMovies);
          setMovie(newMovie);
          // console.log(movie);
          // setLoading(false);
        } else {
          setMovie(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getMovie();
  }, [id]);

  // var filtered = movie.filter(function (el) {
  //   return el != null;
  // });

  // console.log(filtered);

  if (loading) {
    return <Loading />;
  }
  if (!movie) {
    return <h2 className="section-title">No Movie To Display!</h2>;
  }

  const { image, genre, title, plot, rd, rt, ratings } = movie;
  return (
    <section className="section movie-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>

      <h2 className="my_title section-title">{title}</h2>
      <div className="movie">
        <img src={BASE_IMGURL + image + API} alt={title} />
        <div className="movie-info">
          <p>
            <span className="movie-data">Title : </span>
            {title}
          </p>
          <p>
            <span className="movie-data"> Release Date : </span>
            {rd}
          </p>
          <p>
            <span className="movie-data">ratings : </span>
            {ratings}/10
          </p>
          <p>
            <span className="movie-data">Plot : </span>
            {plot}
          </p>
          <p>
            <span className="movie-data">Runtime : </span>
            {rt} Minutes
          </p>
          <p>
            <span className="movie-data">Genre : </span>
            {genre.map((item, index) => {
              return item ? <span key={index}>{item.name}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
