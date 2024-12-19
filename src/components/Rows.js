import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Rows.css";
const baseURL = "https://image.tmdb.org/t/p/original/";

const Rows = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            className="row_poster" // Changed class name
            src={`${baseURL}${movie?.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Rows;
