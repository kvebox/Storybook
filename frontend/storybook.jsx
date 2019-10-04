import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store";
// import {HashRouter, Route} from 'react-router-dom';


import {signup, login, logout} from './util/session_api_util';
import {deletePost} from './util/post_api_util';
import {fetchPostComments} from './util/comment_api_util';
import {fetchPostLikes} from './util/like_api_util';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id] : window.currentUser}
                },
                session: {id: window.currentUser.id}
            };
                
            store = configureStore(preloadedState);
            delete window.currentUser;
        } else {
            store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.deletePost = deletePost;
    window.fetchPostComments = fetchPostComments;
    window.fetchPostLikes = fetchPostLikes;

    ReactDOM.render(<Root store={store}/>, root);
});


// testing ajax calls on the window before store is created

// import { signup, login, logout } from './util/session_api_util';

// user = {
//     email: 'ab@gmail.com',
//     first_name: 'a',
//     last_name: 'b',
//     password: 'asdfghjk'
// }

// window.signup(user).then(res => console.log(res))
// window.fetchPostComments(window.getState().entities.posts[1]))