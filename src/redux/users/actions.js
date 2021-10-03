import { DELETE_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS, EDIT_USER, EDIT_USER_ERROR, EDIT_USER_SUCCESS, GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from "../actions";

export const getUsers = () => ( {
    type: GET_USERS
} )

export const getUsersSuccess = ( response ) => ( {
    type: GET_USERS_SUCCESS,
    payload: response
} )

export const getUsersError = ( error ) => ( {
    type: GET_USERS_ERROR,
    payload: error
} )



export const deleteUser = ( id ) => ( {
    type: DELETE_USER,
    payload: id
} )

export const deleteUserSuccess = ( id ) => ( {
    type: DELETE_USER_SUCCESS,
    payload: { id }
} )

export const deleteUserError = ( error ) => ( {
    type: DELETE_USER_ERROR,
    payload: error
} )

export const editUser = ( request, id, history ) => ( {
    type: EDIT_USER,
    payload: { request, id, history }
} )

export const editUserSuccess = ( response ) => ( {
    type: EDIT_USER_SUCCESS,
    payload: response
} )

export const editUserError = ( error ) => ( {
    type: EDIT_USER_ERROR,
    payload: error
} )



// export const fetchError = ( error ) => ( {
//     type: "FETCH_ERROR",
//     payload: error
// })