import React from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
export default function Home({ movie, series }) {
  const navigate = useNavigate();
  const movieLimit = movie.slice(0, 10);
  const seriesLimit = series.slice(0, 10);
  return (
    <>
      <div className="homebtns">
        <Carousel
          className="carousel"
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showStatus={false}
          showIndicators={false}
        >
          {movie.map((movie, index) => {
            return (
              <div key={index}>
                <div className='details'>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>{movie.vote_average} &#9733;</p>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                >
                
                </img>
              </div>
            );
          })}
        </Carousel>
        <Carousel
          className="carousel"
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showStatus={false}
        >
          {series.map((serie, index) => {
            return (
              <div key={index}>
                <div className='details'>
                <h2>{serie.name}</h2>
                <p>{serie.overview}</p>
                <p>{serie.vote_average} &#9733;</p>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt={serie.name}
                />
                
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="recommendation">
        <h1 className="rec-heading">Recommendations</h1>
        <div className="rec">
          <h1 >Movies</h1>
          {movieLimit.map((movie, index) => {
            return (
              <div key={index} className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            );
          })}
        </div>
        <div className="rec">
          <h1 >TV Shows</h1>
          {seriesLimit.map((serie, index) => {
            return (
              <div key={index} className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt={serie.name}
                  
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}