import axios from "axios";

export const fetchLogin = async ( request ) =>
    await axios.post( "/api/auth/login", request )
        .then( response => ( { response } ) )
        .catch( error => ( { error } ) )


export const fetchReg = async ( request ) =>
    await axios.post( "/api/user/create", request )
        .then( response => ( { response } ) )
        .catch( error => ( { error } ) )

export const fetchMe = async () =>
    await axios.get( "/api/auth/me", {
        headers: {
            Authorization: `Bearer ${ localStorage.getItem( "accessToken" ) }`,

        },
    } )
        .then( response => ( { response } ) )
        .catch( error => ( { error } ) )
