import { all } from "redux-saga/effects"
import postSaga from "./posts/sagas"

export default function* rootSaga () {
    yield all( [
        postSaga()
    ] )
}