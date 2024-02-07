import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
    
    <div className='homebtns'>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEIytwvMoIoiEKGU9-tqxI6s4p3E88Lcfyw&usqp=CAU"
        alt="Movies"
        onClick={() => navigate("/movies")}
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQKG7otAOxz4o__M6qGngh8ZgFTkEjl_zxA&usqp=CAU"
        alt="Tv"
        onClick={() => navigate("/tv")}
      />
    </div>
  )
}