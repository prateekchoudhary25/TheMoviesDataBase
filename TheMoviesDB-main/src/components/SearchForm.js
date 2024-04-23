import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const searchValue = React.useRef("");
  const { setSearchTerm, searchTerm } = useGlobalContext();
  const searchMovie = (e) => {
    if (e.target.value) {
      setSearchTerm(e.target.value);
    } else {
      setSearchTerm("");
    }
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label style={{ color: "white", opacity: "0.9" }} htmlFor="name">
            Search some Movie
          </label>
          <input
            placeholder="Search Avengers"
            value={searchTerm}
            type="text"
            id="name"
            ref={searchValue}
            onChange={(e) => searchMovie(e)}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
