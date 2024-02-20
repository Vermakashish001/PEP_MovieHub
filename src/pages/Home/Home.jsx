import React from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
export default function Home({ movie, series }) {
  const navigate = useNavigate();
  return (
    <div className="homebtns">
      <Carousel
        className="carousel"
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={1000}
        showStatus={false}
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
        infiniteLoop={true}
        autoPlay={true}
        interval={1000}
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
  );
}
