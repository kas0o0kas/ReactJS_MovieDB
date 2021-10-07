import { useState, useEffect } from "react";
import Header from "./Header";
import MovieRows from "./MovieRows";
import $ from 'jquery'

//API key:  a126cd1f2982a654071c46e924f9f9f1

function App() {
  const [movies, setMovies] = useState([]);
  const [UrlString, setUrlString] = useState('https://api.themoviedb.org/3/search/movie?query=marvel&&api_key=a126cd1f2982a654071c46e924f9f9f1')
  useEffect(()=>{
    loadFilmAPI();
  },[UrlString]);

  const loadFilmAPI = () => {
    $.ajax({
      url: UrlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        setMovies(searchResults.results);
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data");
      }
    })
  }

  return (
    <div className="App">
      <Header
        setUrlString = {setUrlString}
      ></Header>
      <MovieRows 
        movies = {movies}
      ></MovieRows>
    </div>
  );
}

export default App;
