import React from 'react';

function MovieDetails({ movie }) {
  return (
    <div className="movie-details">
      <h2 data-testid="movie-title">{movie.title}</h2>
      <p data-testid="movie-release-date">Release Date (UTC): {movie.release_date}</p>
      <p data-testid="movie-runtime">Runtime (minutes): {movie.runtime}</p>
      <p data-testid="movie-overview">{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
