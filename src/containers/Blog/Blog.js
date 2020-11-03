import React, { Component } from 'react';
import Posts from "./Posts/Posts";
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
class Blog extends Component {

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
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts"  component={Posts}/>
                    <Redirect from={'/'} to={'/posts'}/>
                </Switch>
                </div>

        );
    }
}

export default Blog;

