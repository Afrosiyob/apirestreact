import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, ME, ME_ERROR, ME_SUCCESS, REG, REG_ERROR, REG_SUCCESS } from "../actions";

const INIT_STATE = {
    loading: false,
    error: null,
    data: null
}


export const authReducer = ( state = INIT_STATE, { type, payload } ) => {
    switch ( type ) {
        case LOGIN:
            return { ...state, loading: true }
        case LOGIN_SUCCESS:
            return { ...state, loading: false, data: payload }
        case LOGIN_ERROR:
            return { ...state, loading: false, error: payload }
        case REG:
            return { ...state, loading: true }
        case REG_SUCCESS:
            return { ...state, loading: false, data: null }
        case REG_ERROR:
            return { ...state, loading: false, error: payload }
        case ME:
            return { ...state, loading: true }
        case ME_SUCCESS:
            return { ...state, loading: false, data: payload }
        case ME_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return { ...state }
    }
}