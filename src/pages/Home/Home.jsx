import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css';

export default function Home() {
    const navigate = useNavigate()
  return (
    
    <div className='homebtns'>
      <img
        src="https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Movie"
        onClick={() => navigate("/movie")}
        className="movies-image"
      />
      <img
        src="https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Tv Shows"
        onClick={() => navigate("/tv")}
        className="tv-image"
      />
    </div>
  )
}