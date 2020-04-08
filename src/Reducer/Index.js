import {combineReducers} from "redux";
import {movieListReducer} from "./MovieListReducer/MovieListReducer";
import {movieListReducer2} from "./TestReducer/Testreducer";

export const reducer = combineReducers({movieListReducer,movieListReducer2});