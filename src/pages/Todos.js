import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { TodosContex } from '../context/context'


const initialState = {
    loading: false,
    data: null,
    error: null
}

const reducer = ( state, { type, payload } ) => {
    switch ( type ) {
        case "GET_POSTS":
            return { ...state, loading: true }
        case "GET_POSTS_SUCCESS":
            return { ...state, loading: false, data: payload }
        case "GET_POSTS_ERROR":
            return { ...state, loading: false, error: payload }
        default:
            return { ...state }
    }
}

const Todos = () => {
    const { todos, setTodos } = useContext( TodosContex )

    const [ state, dispatch ] = useReducer( reducer, initialState )

    const fetchData = () => {

        dispatch( {
            type: "GET_POSTS"
        } )

        axios.get( "https://jsonplaceholder.typicode.com/posts" )
            .then( res => {
                dispatch( {
                    type: "GET_POSTS_SUCCESS",
                    payload: res?.data
                } )

            } )
            .catch( err => {
                dispatch( {
                    type: "GET_POSTS_ERROR",
                    payload: err
                } )

                // err?.response?.data?.message
            } )
    }

    useEffect( () => {
        fetchData()
    }, [] )


    if ( state?.data ) {
        setTodos( state?.data )
    }

    console.log( todos );

    return (
        <div>
            todos
        </div>
    )
}

export default Todos
