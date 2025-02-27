import React, { useState, useEffect } from "react";
import "../components/Add.css";
import axios from "axios";
import ResultCard from "./ResultCard";

const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=6e06de45`)
      .then(response => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [searchValue]);
  return (
    <div className="add-page">
      <div className="add-content">
        <div className="add-input">
          <input
            type="text"
            placeholder="Search a movie"
            value={searchValue}
            onChange={e => {
              setSearchValue(e.target.value);
            }}
          />
        </div>

        {movies.length > 0 && (
          <ul className="add-movies">
            {movies.map(movie => (
              <li key={movie.imdbID}>{<ResultCard movie={movie} />}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Add;
