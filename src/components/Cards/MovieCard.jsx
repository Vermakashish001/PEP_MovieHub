import React, { useEffect, useState } from 'react'
import {FaHeart,FaRegHeart} from "react-icons/fa"
import './Card.css'

export default function MovieCard({movie}) {
    
    const {id,poster_path,title,release_date,vote_count,vote_average}= movie;
    const [isFavorite,setIsFavorite] = useState(
        JSON.parse(localStorage.getItem('favoriteMovies'))?.some(([_,movieId])=>movieId === id) || false
    )
  const toggleFavorite =()=>{
    setIsFavorite((prev)=>!prev)
  }
  useEffect(()=>{
    const favMovies =JSON.parse(localStorage.getItem("favoriteMovies")) || []
    if(isFavorite){
         localStorage.setItem('favoriteMovies', JSON.stringify([...favMovies, [title,id]]))
    } else {
        localStorage.setItem('favoriteMovies',
        JSON.stringify(favMovies.filter(([_,movieId])=>movieId !== id)))
    }
  },[isFavorite,title,id])

  return (
    <div className='card'>
            <img className='poster' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='title'/>
            <h1 className='title'>{title}</h1>
            <div>
                    {!isFavorite ? (
                        <FaHeart className='fav-icon'  onClick={toggleFavorite} />
                    ):(
                        <FaRegHeart className='fav-icon'onClick={toggleFavorite} />
                    )}
            </div>
    </div>
  )
}