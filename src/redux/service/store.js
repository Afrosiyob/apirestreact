import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";

import rootSaga from "../sagas";
import { rootReducer } from "../reducers";


const sagaMiddleware = createSagaMiddleware();


const middlewares = [ sagaMiddleware ];


if ( process.env.NODE_ENV === `development` ) {
    const { logger } = require( `redux-logger` );
    middlewares.push( logger );
}

export const store = compose( composeWithDevTools(
    applyMiddleware( ...middlewares )
    // other store enhancers if any
) )( createStore )( rootReducer );


sagaMiddleware.run( rootSaga );