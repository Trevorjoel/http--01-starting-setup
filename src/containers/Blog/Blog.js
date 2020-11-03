import React, { Component } from 'react';
import Posts from "./Posts/Posts";
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../hoc/AsyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state={
        auth: true
    }

    render () {
    return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                         to="/posts/"
                                         style={{background:"white"}}
                            >Posts</NavLink>
                            </li>
                            <li><NavLink to={{
                                    pathname:'/new-post'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
                    <Route path="/posts"  component={Posts}/>
                    <Route render={()=> <h1>not found</h1>}/>
                {/*
                    <Redirect from={'/'} to={'/posts'}/>*/}
                </Switch>
                </div>

        );
    }
}

export default Blog;

