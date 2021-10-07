import React from 'react';
import MovieRow from './MovieRow';

const MovieRows = ({movies, setUrlString}) => {
    return (
        <div>
            {
                movies.map((movie,key) => (
                    <MovieRow
                        key = {key}
                        index = {key}
                        poster = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        id = {movie.id}
                        title = {movie.title}
                        overview = {movie.overview}
                    ></MovieRow>
                ))
            }
        </div>
    );
};

export default MovieRows;