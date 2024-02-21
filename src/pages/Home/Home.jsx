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
        <h1 className="m-heading heading">Movies</h1>
        <h1 className="t-heading heading">TV Shows</h1>
        <Carousel
          className="carousel"
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={1000}
          showStatus={false}
          showIndicators={false}
          onClickItem={(index) => navigate(`/movie`)}
        >
          {movie.map((movie, index) => {
            return (
              <div key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
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
          interval={1500}
          showStatus={false}
          onClickItem={(index) => navigate(`/tv`)}
        >
          {series.map((serie, index) => {
            return (
              <div key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt={serie.name}
                  onClick={() => navigate(`/tv/${serie.id}`)}
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