import {
    CHANGE_CURRENT_PAGE,
    CHANGE_MAIN_INPUT, CHANGE_THEME,
    GENRES_SORT,
    GET_GENRES,
    GET_MOVIE, MOVIE_SEARCH
} from "../../ActionTypes/ActionTypes";

const initialState = {
    movieList: {},
    genresList: [],
    pageSize: 20,
    totalUserCount: 1000,
    currentPage: 1,
    valueMainInput: [],
    changeTheme: false
};

export const movieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE: {

            return {
                ...state, movieList: action.payload.results
            }
        }
        case GET_GENRES: {
            return {
                ...state, genresList: action.payload
            }
        }
        case GENRES_SORT: {
            return {
                ...state, movieList: state.movieList.filter(el => el.genre_ids.includes(action.payload))
            }
        }
        case CHANGE_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.payload
            }
        }
        case CHANGE_MAIN_INPUT: {
            return {
                ...state, valueMainInput: action.payload
            }
        }
        case MOVIE_SEARCH: {
            return {
                ...state,
                movieList: state.movieList.filter(el => el.title.toUpperCase().includes(state.valueMainInput.toUpperCase()))
            }
        }
        case CHANGE_THEME: {
            return {
                ...state, changeTheme: state.changeTheme = !state.changeTheme
            }
        }

        default: {
            return state
        }
    }
};
