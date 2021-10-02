import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'




const PostsLazy = lazy( () => import( "../pages/Posts" ) )
const TodosLazy = lazy( () => import( "../pages/Todos" ) )
const PostsTwoLazy = lazy( () => import( "../pages/PostsTwo" ) )
const AuthLazy = lazy( () => import( "../pages/Auth" ) )
const RegstrationLazy = lazy( () => import( "../pages/Regstration" ) )

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/posts" />
            <PrivateRoute path="/posts" component={ PostsLazy } />
            <PrivateRoute path="/poststwo" component={ PostsTwoLazy } />
            <Route path="/todos" component={ TodosLazy } />
            <Route path="/auth" component={ AuthLazy } />
            <Route path="/registration" component={ RegstrationLazy } />
        </Switch>
    )
}



export default Routes



