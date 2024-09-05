import React from "react";
import "./ResultCard.css";
import { useMovieContext } from "../context/GlobalContext";
import * as actions from "../context/ActionTypes";

const ResultCard = ({ movie }) => {
  const movieContext = useMovieContext();
  const movieStoredWatchlist = movieContext.watchlist.find(
    o => o.imdbID === movie.imdbID
  );
  const movieStoredWatched = movieContext.watched.find(
    o => o.imdbID === movie.imdbID
  );
  const watchlistDisabled = movieStoredWatchlist
    ? true
    : movieStoredWatched
    ? true
    : false;
  const watchedDisabled = movieStoredWatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "-"}
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={() => {
              movieContext.moviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: movie
              });
            }}
            disabled={watchlistDisabled}
          >
            Add to watchlist
          </button>
          <button
            className="btn"
            onClick={() => {
              movieContext.moviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie
              });
            }}
            disabled={watchedDisabled}
          >
            Add to watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
