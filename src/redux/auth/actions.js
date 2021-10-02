import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, ME, ME_ERROR, ME_SUCCESS, REG, REG_ERROR, REG_SUCCESS } from "../actions";

export const login = ( request, history ) => ( {
    type: LOGIN,
    payload: { request, history }
} )
export const loginSuccess = ( response ) => ( {
    type: LOGIN_SUCCESS,
    payload: response
} )
export const loginError = ( error ) => ( {
    type: LOGIN_ERROR,
    payload: error
} )

export const reg = ( request, history ) => ( {
    type: REG,
    payload: { request, history }
} )
export const regSuccess = () => ( {
    type: REG_SUCCESS,
} )
export const regError = ( error ) => ( {
    type: REG_ERROR,
    payload: error
} )


export const me = ( history ) => ( {
    type: ME,
    payload: history
} )
export const meSuccess = ( response ) => ( {
    type: ME_SUCCESS,
    payload: response
} )
export const meError = ( error ) => ( {
    type: ME_ERROR,
    payload: error
} )