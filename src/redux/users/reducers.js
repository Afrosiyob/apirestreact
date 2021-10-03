import { DELETE_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS, EDIT_USER, EDIT_USER_ERROR, EDIT_USER_SUCCESS, GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from "../actions";

const INIT_STATE = {
    loading: false,
    error: null,
    data: []
}

export const userReducer = ( state = INIT_STATE, { type, payload } ) => {
    switch ( type ) {
        case GET_USERS:
            return { ...state, loading: true }
        case GET_USERS_SUCCESS:
            return { ...state, loading: false, data: payload }
        case GET_USERS_ERROR:
            return { ...state, loading: false, error: payload }
        case DELETE_USER:
            return { ...state, loading: true }
        case DELETE_USER_SUCCESS:
            return { ...state, loading: false, data: state.data.filter( item => item?.id !== payload?.id ) }
        case DELETE_USER_ERROR:
            return { ...state, loading: false, error: payload }
        case EDIT_USER:
            return { ...state, loading: true }
        case EDIT_USER_SUCCESS:
            return { ...state, loading: false, data: state.data.map( item => item?.id === payload?.id ? payload : item ) }
        case EDIT_USER_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return { ...state }
    }
}