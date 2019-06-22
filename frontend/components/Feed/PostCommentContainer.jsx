import PostComment from './PostComment';
import React from 'react';
import { connect } from 'react-redux';
import {deletePostComment, fetchPostComments} from '../../actions/comment_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    deletePostComment: (post, comment) => dispatch(deletePostComment(post, comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);


