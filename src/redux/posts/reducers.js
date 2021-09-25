import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "../actions"

const initialState = {
    loading: false,
    data: null,
    error: null
}


export const postReducer = ( state = initialState, { type, payload } ) => {
    switch ( type ) {
        case GET_POSTS:
            return { ...state, loading: true }
        case GET_POSTS_SUCCESS:
            return { ...state, loading: false, data: payload }
        case GET_POSTS_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return { ...state }
    }
}