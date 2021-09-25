import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/posts/actions'

const PostsTwo = () => {


    const dispatch = useDispatch()
    const { loading, data, error } = useSelector( state => state.postReducer )

    useEffect( () => {
        dispatch( getPosts() )
    }, [ dispatch ] )

    console.log( data );

    return (
        <div>
            posts two with reducer
        </div>
    )
}

export default PostsTwo
