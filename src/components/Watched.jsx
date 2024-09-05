import React from "react";
import MovieCard from "./MovieCard";
import { useMovieContext } from "../context/GlobalContext";
import "./Watched.css";

const Watched = () => {
  const movieContext = useMovieContext();
  return (
    <div className="watched">
      <div className="container">
        <div className="main-heading">
          <h1 className="watched-heading">My Watched</h1>
          <span className="movies-count">
            {movieContext.watched.length === 1
              ? `${movieContext.watched.length} Movie`
              : `${movieContext.watched.length} Movies`}
          </span>
        </div>
        {movieContext.watched.length > 0 ? (
          <div className="movie-grid">
            {movieContext.watched.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list, add some!</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
