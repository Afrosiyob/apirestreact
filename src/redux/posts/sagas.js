import { all, call, fork, put, takeEvery } from "@redux-saga/core/effects";
import { GET_POSTS } from "../actions";
import { getPostsError, getPostsSuccess } from "./actions";
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
        yield put( getPostsSuccess( response ) )
    } else {
        yield put( getPostsError( error ) )
    }

}

export default function* postSaga () {
    yield all( [
        fork( watchGetPosts )
    ] )
}

