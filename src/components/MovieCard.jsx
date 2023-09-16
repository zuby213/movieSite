import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="movie-card" data-testid="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
        data-testid="movie-poster"
      />
      <h3 data-testid="movie-title">{movie.title}</h3>
      <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
    </div>
  );
}

export default MovieCard;
