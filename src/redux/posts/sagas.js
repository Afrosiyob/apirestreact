import { all, call, fork, put, takeEvery } from "@redux-saga/core/effects";
import { GET_POSTS, POST_POSTS } from "../actions";
import { getPostsError, getPostsSuccess, postPostsError, postPostsSuccess } from "./actions";
import axios from "axios"

function* watchGetPosts () {
    yield takeEvery( GET_POSTS, workGetPosts )
}

const fetchPosts = () => axios
    .get( "https://jsonplaceholder.typicode.com/posts" )
    .then( ( response ) => ( { response } ) )
    .catch( ( error ) => ( { error } ) )


function* workGetPosts () {
    const { response, error } = yield call( fetchPosts )
    if ( response ) {
        yield put( getPostsSuccess( response?.data ) )
    } else {
        yield put( getPostsError( error ) )
    }
}



function* watchPostPosts () {
    yield takeEvery( POST_POSTS, workPostPosts )
}

const fetchPostPosts = async ( request ) =>
    await axios.post( "https://jsonplaceholder.typicode.com/posts", request, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    } )
        .then( response => ( { response } ) )
        .catch( error => ( { error } ) )


function* workPostPosts ( { payload } ) {
    const request = payload
    const { response, error } = yield call( fetchPostPosts, request )
    if ( response ) {
        yield put( postPostsSuccess( response?.data ) )
    } else {
        yield put( postPostsError( error ) )
    }
}



export default function* postSaga () {
    yield all( [
        fork( watchGetPosts ),
        fork( watchPostPosts ),
    ] )
}

