import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_POST_COMMENTS = 'RECEIVE_ALL_POST_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receiveAllPostComments = comments => ({
    type: RECEIVE_ALL_POST_COMMENTS,
    comments
});

const receivePostComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removePostComment = () => ({
    type: REMOVE_POST,
});



export const fetchPostComments = post => dispatch => CommentApiUtil.fetchPostComments(post)
    .then(comments => dispatch(receiveAllPostComments(comments)));

export const createPostComment = (post, comment) => dispatch => CommentApiUtil.createPostComment(post, comment)
    .then(comment => dispatch(receivePostComment(comment)));

export const deletePostComment = (post, comment) => dispatch => CommentApiUtil.deletePostComment(post, comment)
    .then(() => dispatch(removePostComment()));