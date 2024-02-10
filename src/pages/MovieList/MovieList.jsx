import React, { useState } from 'react'
import MovieCard from '../../components/Cards/MovieCard'
import '../../App.css'
import './MovieList.css'
export default function MovieList({movies}) {
    const [sortOrder,setSortOrder] = useState('asc')
    const sortedMovies = [...movies].sort((a,b)=>{
      if(sortOrder === "asc"){
        return a.vote_count - b.vote_count
      } else{
        return b.vote_count - a.vote_count
      }
    })
    const handleSort =()=>{
        setSortOrder((prev)=>(prev === "asc"?"desc":"asc"))
    }
  return (
    <div className="full" >
        <div>
            <button className="sort-button" onClick={handleSort}>
                Sort by vote average ({sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>
        </div>

        <ul className='movielist'>
            {sortedMovies.map((movie)=>
            <MovieCard  key={movie.id} movie = {movie}/>)}
        </ul>
    
    </div>
  )
}