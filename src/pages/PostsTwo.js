import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, postPosts } from '../redux/posts/actions'


import { useForm } from "react-hook-form";

const PostsTwo = () => {

    const dispatch = useDispatch()
    const { loading, data, error } = useSelector( state => state.postReducer )

    useEffect( () => {
        dispatch( getPosts() )
    }, [ dispatch ] )


    console.log( data );

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        data[ "userId" ] = parseInt( data[ "userId" ] )

        dispatch( postPosts( data ) )
        console.log( data )

    };

    // const fetchFile = ( e ) => {
    //     e.preventDefault()
    //     const file = e.target.files[ 0 ]
    //     console.log( file );
    // }

    return (
        <div>
            {
                loading ? "...loading" : (
                    <form onSubmit={ handleSubmit( onSubmit ) } >

                        <input name="title" { ...register( "title", { required: true } ) } />
                        { errors.title && <span>This field is required</span> }
                        <input name="body" { ...register( "body", { required: true } ) } />
                        { errors.body && <span>This field is required</span> }
                        <input name="userId" type="number" { ...register( "userId", { required: true } ) } />
                        { errors.userId && <span>This field is required</span> }

                        <input type="submit" />

                    </form>
                )
            }

        </div>
    )
}

export default PostsTwo


