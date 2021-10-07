import React from 'react';

const MovieRow = ({id, title, overview, poster, index}) => {
    const onViewClickHandle = () => {
        window.location.href = `https://www.themoviedb.org/movie/${id}`;
    }

    const onPlayClickHandle = () => {
        console.log("Play");
    }

    const movieStyle = (index%3===0)
    ?{"backgroundColor":"rgb(201, 74, 74)"}
    :(index%2===0)?{"backgroundColor":"rgb(120, 154, 228)"}
    :{"backgroundColor":"rgb(100, 223, 155)"};

    return (
        <div className="movie" style = {movieStyle}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img className="movie__poster" src={poster} alt="Poster" />
                        </td>
                        <td className="movie__infor">
                            <h3 className="movie__title">{title}</h3>
                            <span className ="movie__overview">{overview}</span>
                            <div className="movie__controls">
                                <button className="play-button" onClick = {onPlayClickHandle}>Play</button>
                                <button className="view-button" onClick = {onViewClickHandle}>View</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MovieRow;