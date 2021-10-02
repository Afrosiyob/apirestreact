import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { postReducer } from "./posts/reducers";




export const rootReducer = combineReducers( {
    authReducer,
    postReducer
    // redure2
} )