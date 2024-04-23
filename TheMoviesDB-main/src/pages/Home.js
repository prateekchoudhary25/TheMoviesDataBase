import React from "react";
// import Loading from "../components/Loading";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";
const Home = () => {
  return (
    <main>
      <SearchForm />
      <MovieList />
    </main>
  );
};

export default Home;
