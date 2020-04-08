import React from 'react';
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from 'redux-thunk'

import {reducer} from "../Reducer/Index";

const movieMiddleware=(store)=>(next)=>(action)=>{
    console.log(store.getState().movieListReducer.valueMainInput.length);
    // if (!store.getState().movieListReducer.valueMainInput.length){
    //     return
    // }


    next(action)
};

export const store = createStore(reducer,applyMiddleware(movieMiddleware,ReduxThunk));