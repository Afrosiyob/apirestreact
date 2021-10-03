import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { postReducer } from "./posts/reducers";
import { userReducer } from "./users/reducers";




export const rootReducer = combineReducers( {
    authReducer,
    postReducer,
    userReducer
    // redure2
} )