import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import MovieSearch from './components/MovieSearch';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch top 10 movies and populate the `movies` state.
    // You will need to use your TMDB API key and make the API request here.
    
    const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=83a382c5f6579134e75c6415be091569';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Set the movie data in the state
        setMovies(data.results.slice(0,10));
      })
      .catch((error) => {
        // Handle errors, e.g., display an error message
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (query) => {
    // Implement movie search functionality and set searchResults state.
    // Handle errors if the API request fails.
    const searchAPI = 'https://api.themoviedb.org/3/search/movie?api_key=83a382c5f6579134e75c6415be091569';
    

  };

  return (
    
      <div className="App">
        <h1>HOT MOVIES</h1>
        <MovieSearch onSearch={handleSearch} />
         {error && <ErrorMessage message={error} />}
          
            <div className="movie-grid">
              {searchResults.length > 0
                ? searchResults.map((movie) => (
                  <Link to="/movies/:id"> <MovieCard key={movie.id} movie={movie} /></Link>
                  ))
                : movies.map((movie) => (
                   <Link to="/movies/:id"> <MovieCard key={movie.id} movie={movie} /></Link>
                  ))}
                  <Routes>
                    <Route path="/movies/:id" element={<MovieDetails/>}/>
                  </Routes>
            </div>
          
      </div>
    
  );
}
  

export default App;
