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

export const fetchGetUsers = async () =>
    await axios.get( "/api/user/list", {
        headers: {
            Authorization: `Bearer ${ localStorage.getItem( "accessToken" ) }`,
        },
    } )
        .then( response => ( { response } ) )
        .catch( error => ( { error } ) )

export const fetchDeleteUser = async ( id ) =>
    await axios.delete( `/api/user/${ id }`, {
        headers: {
            Authorization: `Bearer ${ localStorage.getItem( "accessToken" ) }`,
        },
    } )
        .then( response => ( { response } ) )
        .catch( error => ( { error } ) )


export const fetchEditUser = async ( request, id ) =>
    await axios.put( `/api/user/${ id }`, request, {
        headers: {
            Authorization: `Bearer ${ localStorage.getItem( "accessToken" ) }`,
        },
    } )
        .then( response => ( { response } ) )
        .catch( error => ( { error } ) )