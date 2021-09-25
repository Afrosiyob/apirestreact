import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "../actions";

export const getPosts = () => ( {
    type: GET_POSTS
} )

export const getPostsSuccess = ( response ) => ( {
    type: GET_POSTS_SUCCESS,
    payload: response
} )

export const getPostsError = ( error ) => ( {
    tpye: GET_POSTS_ERROR,
    payload: error
} )