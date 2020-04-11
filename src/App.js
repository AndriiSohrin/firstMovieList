import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {HeaderWithRedux} from "./Components/Header/Header";
import {MoviesListWithRedux} from "./Components/MoviesLis/MoviesLis";
import {Provider} from "react-redux";
import {store} from "../src/Store/Store";

const Movie = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=19eec3c1db6bc640e4777bf74bacacb0`)
            .then(resolve => resolve.json())
            .then(json => setMovie(json))
    }, []);
    console.log(movie.results);
    return (
        <div>
            {movie.results && movie.results.map(el => <div key={el.id}>{el.id} <img
                src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="#"/></div>)}
        </div>
    )
};

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HeaderWithRedux/>
                <div className='main'>
                    <MoviesListWithRedux/>
                </div>
            </div>

        </Provider>
    );
}

export default App;
