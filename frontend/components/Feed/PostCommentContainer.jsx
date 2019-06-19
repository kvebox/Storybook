import PostComment from './PostComment';
import React from 'react';
import { connect } from 'react-redux';
import {fetchPostComments} from '../../actions/comment_actions';

const mapStateToProps = state => ({
    comments: Object.keys(state.entities.comments).map(key => state.entities.comments[key]),
});

const mapDispatchToProps = dispatch => ({
    fetchPostComments: post => dispatch(fetchPostComments(post)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);


