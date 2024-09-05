import React from "react";
import { useMovieContext } from "../context/GlobalContext";
import * as actions from "../context/ActionTypes";
import "./MovieControls.css";

const MovieControls = ({ movie, type }) => {
  const movieContext = useMovieContext();
  return (
    <div className="movie-controls">
      <div className="inner-card-controls">
        {type === "watchlist" && (
          <>
            <button
              className="ctrl-btn"
              onClick={() => {
                movieContext.moviesDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHED,
                  payload: movie
                });
              }}
            >
              <i className="fa-solid fa-eye" />
            </button>
            <button
              className="ctrl-btn"
              onClick={() => {
                movieContext.moviesDispatch({
                  type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                  payload: movie.imdbID
                });
              }}
            >
              <i className="fa-fw fa fa-times" />
            </button>
          </>
        )}
        {type === "watched" && (
          <>
            <button className="ctrl-btn" onClick={()=> {movieContext.moviesDispatch({
                type:actions.MOVE_TO_WATCHLIST,
                payload:movie
            })}}>
              <i className="fa-solid fa-eye-slash" />
            </button>
            <button className="ctrl-btn" onClick={()=> {movieContext.moviesDispatch({
                type:actions.REMOVE_MOVIE_FROM_WATCHED,
                payload:movie.imdbID
            })}}>
              <i className="fa-fw fa fa-times" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieControls;
