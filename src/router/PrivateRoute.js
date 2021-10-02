import React from 'react'
import { Redirect, Route } from 'react-router'


const PrivateRoute = ( { component: Component, ...rest } ) => {

    const token = localStorage.getItem( "accessToken" )

    return (
        <Route
            { ...rest }
            render={ ( props ) =>
                token ? (
                    <Component />
                ) : (
                    <Redirect
                        to={ {
                            pathname: "/auth",
                            state: { from: props.location },
                        } }
                    />
                )
            }
        />
    );
}

export default PrivateRoute
