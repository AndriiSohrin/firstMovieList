import React, {Component, useEffect} from "react";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from "react-redux";
import './MovieList.css'
import {ToggleThemeWithRedux} from "../togglrTheme/ToggleTheme";


const MoviesList = ({movieList, getMovie, currentPage, changeCurrentPage,changeTheme}) => {

    useEffect(() => {
        getMovie(currentPage)
    }, [currentPage]);
    console.log('tyt ', movieList)
    const pagination = [];
    for (let i = 1; i <= 50; i++) {
        pagination.push(i)
    }
    return (
        <>
            <div className={`mx-auto  ${!changeTheme ? 'moviePage':'moviePage2'}`}>
                <ToggleThemeWithRedux/>
                <div className='block-pagination'>{pagination.map(el => <span className={'paginationPoint'} key={el}
                                                 onClick={() => changeCurrentPage(el)}>{el}</span>)}</div>
                {movieList.length && movieList.map(el => <div key={el.id}>
                    <div className="card" style={{width: '18rem', height: '36rem', textAlign: 'center'}}>
                        <img src={`https://image.tmdb.org/t/p/w400/${el.poster_path}`} className="card-img-top card-img"
                             alt="..."/>
                        <div className="card-body text-card">
                            <h5>{el.title}</h5>
                            <p className="card-text">{el.overview}</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    )
};


const getMovie = (currentPage) => (dispatch) => {
    console.log('currentPage', currentPage)
    return (
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=19eec3c1db6bc640e4777bf74bacacb0&page=${currentPage}`)
            .then(resolve => resolve.json())
            .then(json => dispatch({type: 'GET_MOVIE', payload: json}))
    )
};

const mapStateToProps = (state) => {
    return {
        movieList: state.movieListReducer.movieList,
        currentPage: state.movieListReducer.currentPage,
        changeTheme: state.movieListReducer.changeTheme
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMovie: (currentPage) => dispatch(getMovie(currentPage)),
        changeCurrentPage: (id) => dispatch({type: 'CHANGE_CURRENT_PAGE', payload: id})
    }
};

export const MoviesListWithRedux = connect(mapStateToProps, mapDispatchToProps)(MoviesList);