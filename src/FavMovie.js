import React, { useState } from 'react'
import MovieList from './MovieList'

export default function FavMovie() {
  const [fav,setFav]= useState([])
  const favoriteMovieIDs = JSON.parse(localStorage.getItem('favoriteMovies')) || []
  const fetchMovies = async() =>{
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=31ff7e91a28d485093a2c0e85efae4e4&language=en-US&page=1`)
      const result = await response.json() ;
      return result.results
    } catch (error) {
      console.log(error)
      return []
    }
  }
  const renderFavoriteMovies = async ()=>{
     const mainMovieList = await fetchMovies();
     const favoriteMovies = mainMovieList.filter((movie)=>
         favoriteMovieIDs.some(([_,movieId])=>movieId === movie.id)
     )
     return favoriteMovies
  }
   renderFavoriteMovies().then((response)=>{
    setFav(response)
   })
  return (
    <div>
      <h1>Favorite Movies</h1>
      {favoriteMovieIDs.length > 0?(
        <MovieList movies={fav}/>
      ):<>
         <h1>No movies selected</h1>
      </>}
    </div>
  )
}