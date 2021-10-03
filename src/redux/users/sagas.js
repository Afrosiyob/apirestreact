import { message } from "antd"
import { takeEvery, call, put, all, fork } from "redux-saga/effects"
import { DELETE_USER, EDIT_USER, GET_USERS } from "../actions"
import { fetchDeleteUser, fetchEditUser, fetchGetUsers } from "../service/api.service"
import { deleteUserError, deleteUserSuccess, editUserError, editUserSuccess, getUsersError, getUsersSuccess } from "./actions"

function* watchGetUsers () {
    yield takeEvery( GET_USERS, workGetUsers )
}

function* workGetUsers () {
    const { response, error } = yield call( fetchGetUsers )
    if ( response ) {
        console.log( response );
        yield put( getUsersSuccess( response?.data?.data ) )
    } else {
        message.error( error?.response?.data?.message )
        yield put( getUsersError( error?.response?.data?.message ) )
    }
}

function* watchDeleteUser () {
    yield takeEvery( DELETE_USER, workDeleteUser )
}

function* workDeleteUser ( { payload } ) {
    const { response, error } = yield call( fetchDeleteUser, payload )
    if ( response ) {
        console.log( response );

        yield put( deleteUserSuccess( payload ) )
    } else {
        message.error( error?.response?.data?.message )
        yield put( deleteUserError( error?.response?.data?.message ) )
    }
}


function* watchEditUser () {
    yield takeEvery( EDIT_USER, workEditUser )
}

function* workEditUser ( { payload } ) {

    const { request, id, history } = payload

    const { response, error } = yield call( fetchEditUser, request, id )
    if ( response ) {
        console.log( response );
        yield put( editUserSuccess( response?.data?.data ) )
        history.push( "/users" )
    } else {
        // message.error( error?.response?.data?.message )
        yield put( editUserError( error?.response?.data?.message ) )
    }
}

export default function* userSaga () {
    yield all( [
        fork( watchGetUsers ),
        fork( watchDeleteUser ),
        fork( watchEditUser ),
    ] )
}