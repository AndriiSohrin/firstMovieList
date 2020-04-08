import {SORT_BY_ACTION, SORT_BY_ADVENTURE} from "../../ActionCreators/ActionCreators";

const initialState={

};

export const movieListReducer2 = (state=initialState,action)=>{
    switch (action.type) {
        case SORT_BY_ACTION:{
            return state
        }
        case SORT_BY_ADVENTURE:{
            return state
        }
        default:{
            return state
        }
    }
};