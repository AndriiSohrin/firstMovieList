import {
    CHANGE_CURRENT_PAGE,
    CHANGE_MAIN_INPUT,
    CHANGE_THEME,
    GENRES_SORT, GET_GENRES, GET_MOVIE,
    MOVIE_SEARCH
} from "../ActionTypes/ActionTypes";

export const onClickGenresAC = (id) => ({type: GENRES_SORT, payload: id});
export const onChangeMainInputAC = (value) => ({type: CHANGE_MAIN_INPUT, payload: value})
export const movieSearch = () => ({type: MOVIE_SEARCH});
export const changeCurrentPageAC = (id) => ({type: CHANGE_CURRENT_PAGE, payload: id});
export const onChangeTheme = () => ({type: CHANGE_THEME});

export const getMovie = (currentPage) => (dispatch) => {
    return (
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=19eec3c1db6bc640e4777bf74bacacb0&page=${currentPage}`)
            .then(resolve => resolve.json())
            .then(json => dispatch({type: GET_MOVIE, payload: json}))
    )
};

export const getGenres = () => (dispatch) => {
    return (
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=19eec3c1db6bc640e4777bf74bacacb0`)
            .then(resolve => resolve.json())
            .then(json => dispatch({type: GET_GENRES, payload: json}))
    )
};
