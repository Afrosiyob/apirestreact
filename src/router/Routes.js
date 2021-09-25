import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'


const PostsLazy = lazy( () => import( "../pages/Posts" ) )
const TodosLazy = lazy( () => import( "../pages/Todos" ) )
const PostsTwoLazy = lazy( () => import( "../pages/PostsTwo" ) )

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/posts" />
            <Route path="/posts" component={ PostsLazy } />
            <Route path="/poststwo" component={ PostsTwoLazy } />
            <Route path="/todos" component={ TodosLazy } />
        </Switch>
    )
}



export default Routes



