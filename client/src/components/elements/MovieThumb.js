import React from "react";
import { Link } from "@reach/router";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickeable" src={image} alt="moviethumb" />
      </Link>
    ) : (
      <img src={image} alt="moviethumb" />
    )}
  </StyledMovieThumb>
);

export default MovieThumb;
