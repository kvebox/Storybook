import React from 'react';
import { connect } from 'react-redux';
import PostCreateWidget from './PostCreateWidget';
import {createPost} from '../actions/post_actions';


const mapStateToProps = state => {
    let users = state.entities.users;
    let errors = state.entities.errors;
    return {
        currentUser: users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    createPost: (user,post) => dispatch(createPost(user,post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCreateWidget);