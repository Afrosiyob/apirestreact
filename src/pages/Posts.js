import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Posts = () => {


    const [ state, setState ] = useState( {
        loading: false,
        data: null,
        error: null
    } )


    console.log( state );

    const fetchData = () => {
        setState( ( prevState ) => ( {
            ...prevState,
            loading: true
        } ) )

        axios.get( "https://jsonplaceholder.typicode.com/posts" )
            .then( res => {
                setState( ( prevState ) => ( {
                    ...prevState,
                    loading: false,
                    data: res?.data
                } ) )

            } )
            .catch( err => {
                setState( ( prevState ) => ( {
                    ...prevState,
                    loading: false,
                    error: err
                } ) )

                // err?.response?.data?.message
            } )


    }

    useEffect( () => {

        fetchData()

    }, [] )





    if ( state?.loading ) return "loading"
    if ( state?.error ) return "sorry error"


    return (
        <div>
            posts
        </div>
    )
}

export default Posts
