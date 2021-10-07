import React from 'react';
import logo from './logo.svg'

const Header = ({setUrlString}) => {
    const submitHandle = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        setUrlString(`https://api.themoviedb.org/3/search/movie?query=${e.target[0].value}&&api_key=a126cd1f2982a654071c46e924f9f9f1`);
    }

    return (
        <div className = "header">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={logo} alt="Logo Movie DB" />
                        </td>
                        <td>
                            <h2 className="header__title">Movie DB search</h2>
                        </td>
                        <td className="header__links">
                            <a href="/movies">Movie</a>
                            <a href="/tv">TV</a>
                            <a href="/people">People</a>
                            <a href="/more">More</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="header__search">
                <div className="header__search-overlay"></div>
                <div className="header__search-slogan">
                    <h1>Welcome</h1>
                    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                

                <form className="header__search-input" onSubmit={e => submitHandle(e)}>
                    <input className="input-field" type = "text" placeholder = "Search for movie, tv show, person,....."></input>
                    <input className="input-submit" type= "submit" value="Search"/>
                </form>

            </div>
        </div>
    );
};

export default Header;