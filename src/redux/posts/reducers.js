import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS, POST_POSTS, POST_POSTS_ERROR, POST_POSTS_SUCCESS } from "../actions"

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
        case POST_POSTS:
            return { ...state, loading: true }
        case POST_POSTS_SUCCESS:
            return { ...state, loading: false, data: [ ...state.data, payload ] }
        // case POST_DELETE_SUCCESS:
        //     return { ...state, loading: false, data: state.data.filter( el => el.id === payload.data.id ) }
        // case POST_EDIT_SUCCESS:
        //     return { ...state, loading: false, data: state.data.map(el=>el.id===payload.data.id? payload.data.id: el) }
        case POST_POSTS_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return { ...state }
    }
}