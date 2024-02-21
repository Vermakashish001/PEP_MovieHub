import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import MovieList from './pages/MovieList/MovieList'
import Navbar from './components/Navbaar/Navbar'
import Pagination from './components/Pagination/Pagination'
import Tvlist from './pages/TvList/Tvlist'
import FavMovie from './pages/FavMovie/FavMovie'
import FavTv from './pages/FavTv/FavTv'



export default function App() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [currentMoviePage, setCurrentMoviePage] = useState(1);
  const [currentSeriesPage, setCurrentSeriesPage] = useState(1);
  const [totalMoviePages, setTotalMoviePages] = useState(0)
  const [totalSeriesPages, setTotalSeriesPages] = useState(0)
  const fetchMovies = async (page) => {
    try {
      const reponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`);
      const result = await reponse.json()
      setMovies(result.results);
      setTotalMoviePages(result.total_pages);

    } catch (error) {
      console.log("error", error)
    }
  }
  const fetchSeries = async (page) => {
    try {
      const reponse = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=8291c0a5a15c99a6e3e31dc92e38eefa&language=en-US&page=${page}`);
      const result = await reponse.json()
      setSeries(result.results);
      setTotalSeriesPages(result.total_pages);
    } catch (error) {
      console.log("error", error)
    }
  }
  useEffect(() => {
    fetchMovies(currentMoviePage)
    fetchSeries(currentSeriesPage) 
  }, [currentMoviePage, currentSeriesPage])
  const handleMovieSearch = async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=8291c0a5a15c99a6e3e31dc92e38eefa&include_adult=false&language=en-US&page=1`);
      const result = await response.json();
      setMovies(result.results);
      setTotalMoviePages(result.total_pages);
      setCurrentMoviePage(1);

    } catch (error) {
      console.log("error", error)
    }
  }
  const handleTvSearch = async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&api_key=f531333d637d0c44abc85b3e74db2186&include_adult=false&language=en-US&page=1`);
      const result = await response.json();
      setSeries(result.results);
      setTotalSeriesPages(result.total_pages);
      setCurrentSeriesPage(1);

    } catch (error) {
      console.log("error", error)
    }
  }
  const handlePageChange = (page) => {
    setCurrentMoviePage(page)
    
  }
  return (
    <div>

      <BrowserRouter>
        <Navbar onSearch={handleMovieSearch} />
        <Routes>
          <Route path='/' element={<Home movie={movies} series={series} />} />
          <Route path="/movie" element={<div>
            <MovieList movies={movies} />
            <Pagination page={currentMoviePage} totalPages={totalMoviePages} setPage={handlePageChange} />
          </div>} />
          <Route path='/favmov' element={<FavMovie />} />
          <Route path='tv' element={
            <div>
              <Tvlist series={series} />
              <Pagination page={currentSeriesPage} totalPages={totalSeriesPages} setPage={setCurrentSeriesPage} />
            </div>
          } />
          <Route path='/favTv' element={<FavTv />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}