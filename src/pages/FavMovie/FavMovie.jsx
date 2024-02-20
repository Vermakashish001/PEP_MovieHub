import React, { useState, useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import "./FavMovie.css";
export default function FavMovie() {
  const [fav, setFav] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const favoriteMovieIDs = JSON.parse(localStorage.getItem('favoriteMovies')) || []
  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1`)
      const result = await response.json();

      setFav(result.results.filter((movie) => {
        return favoriteMovieIDs.some(([_, movieId]) => {
          return movieId == movie.id
        })
      }));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies();
  }, [])


  return (
    <div>
      <h1>Favorite Movies</h1>
      {fav.length > 0 ? (
        <MovieList movies={fav} />
      ) : (
        <h1>No movies selected</h1>
      )}
    </div>
  )
}