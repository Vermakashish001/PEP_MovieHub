import React, { useEffect, useState } from 'react'
import {FaHeart,FaRegHeart} from "react-icons/fa"
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
    <div>
        <li className='card'>
            <img className='poster' height="150" width="150" src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='title'/>
            <h1 className='title'>{title}</h1>
            <section className='fav-heart'>
                <div className='heart-icon'>
                    <p>Rating: {vote_average}</p>
                    <p>Votes: {vote_count} </p>
                </div>
                <div>
                    <p>Release: {release_date}</p>
                    {!isFavorite ? (
                        <FaHeart className='fav-icon' color='red'/>
                    ):(
                        <FaRegHeart className='fav-icon'/>
                    )}
                </div>
            </section>
        </li>
    </div>
  )
}