import { all, call, fork, takeEvery, put } from "@redux-saga/core/effects";
import { message } from "antd";
import { LOGIN, ME, REG } from "../actions";
import { fetchLogin, fetchMe, fetchReg } from "../service/api.service";
import { loginError, loginSuccess, meError, meSuccess, regSuccess } from "./actions";

function* watchLogin () {
    yield takeEvery( LOGIN, workLogin )
}

function* workLogin ( { payload } ) {
    const { request, history } = payload

    const { response, error } = yield call( fetchLogin, request )

    if ( response ) {
        const { token_info, user_info } = response?.data?.data
        yield put( loginSuccess( user_info ) )
        localStorage.setItem( "accessToken", token_info?.accessToken )
        localStorage.setItem( "refreshToken", token_info?.refreshToken )
        history.push( '/' )
    } else {
        message.error( error.response.data.message );
        yield put( loginError( error ) )
    }

}


function* watchReg () {
    yield takeEvery( REG, workReg )
}

function* workReg ( { payload } ) {
    const { request, history } = payload
    const { response, error } = yield call( fetchReg, request )
    if ( response ) {
        yield put( regSuccess() )
        history.push( '/auth' )
    } else {
        message.error( error.response.data.message );
        yield put( loginError( error ) )
    }
}


function* watchMe () {
    yield takeEvery( ME, workMe )
}

function* workMe ( { payload } ) {
    const history = payload
    const { response, error } = yield call( fetchMe )

    if ( response ) {
        console.log( response );

        yield put( meSuccess( response?.data?.data?.user_info ) )

    } else {
        message.error( error.response.data.message )
        history.push( "/auth" )
        localStorage.removeItem( "accessToken" )
        localStorage.removeItem( "refreshToken" )
        yield put( meError( error.response.data.message ) )
    }
}



export default function* authSaga () {
    yield all( [
        fork( watchLogin ),
        fork( watchReg ),
        fork( watchMe )
    ] )
}