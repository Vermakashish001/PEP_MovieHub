import React, { useState, useEffect } from "react";
import Tvlist from "../TvList/Tvlist";
import "./FavTv.css";
export default function FavTv() {
  const [fav, setFav] = useState([]);
  const favoriteSeriesIDs =
    JSON.parse(localStorage.getItem("favoriteSeries")) || [];
  const fetchSeries = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1`
      );
      const result = await response.json();

      setFav(result.results.filter((series) => {
        return favoriteSeriesIDs.some(([_, seriesId]) => {
          return seriesId == series.id
        })
      }));
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchSeries();
  }, [])
  
  return (
    <div className='fav'>
      <h1 className='heading'>Favorite TV Series</h1>
      {favoriteSeriesIDs.length > 0 ? (
        <Tvlist series={fav} />
      ) : (
        <h1>No Series selected</h1>
      )}
    </div>
  );
}
