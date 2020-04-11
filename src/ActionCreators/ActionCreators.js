import {
    CHANGE_CURRENT_PAGE,
    CHANGE_MAIN_INPUT,
    CHANGE_THEME,
    GENRES_SORT,
    MOVIE_SEARCH
} from "../ActionTypes/ActionTypes";

export const onClickGenresAC = (id) => ({type: GENRES_SORT, payload: id});
export const onChangeMainInputAC = (value) => ({type: CHANGE_MAIN_INPUT, payload: value})
export const movieSearch = () => ({type: MOVIE_SEARCH});
export const changeCurrentPage = (id) => ({type: CHANGE_CURRENT_PAGE, payload: id});
export const onChangeTheme = () => ({type: CHANGE_THEME});
