import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";
export default function Navbar({ onSearch,onTvSearch }) {
  const [query, setQuery] = React.useState("");
  const [query1, setQuery1] = React.useState("");
  const handleSearch = () => {
    onSearch(query);
    onTvSearch(query1);
  };
  const func = (e) => {
    setQuery(e.target.value);
    setQuery1(e.target.value);
  };
  return (
    <nav className="navbar">
      <h1><span>M</span>OVIEMAVEN</h1>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movie">Movies</Link>
        </li>
        <li>
          <Link to="/tv">TV</Link>
        </li>
        <li>
          <Link to="/favmov">Movie Library</Link>
        </li>
        <li>
          <Link to="/favtv">TV Library</Link>
        </li>
      </ul>
      <div className="search">
        <input
          type="text"
          value={query}
          onChange={func}
          placeholder="Search anything..."
        />
        <button className="search-button" onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </nav>
  );
}
