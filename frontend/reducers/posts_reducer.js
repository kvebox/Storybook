import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST  } from '../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            newState = action.posts;
            return newState;
        case RECEIVE_POST:
            newState[action.post.id] = action.post;
            return newState;
        case REMOVE_POST:
            delete newState[action.post];
            return newState;
        case RECEIVE_COMMENT:
            newState = JSON.parse(JSON.stringify(state));
            newState[action.comment.post.id].comments.push(action.comment);
            return newState;
        case REMOVE_COMMENT:
            // debugger 
            newState = JSON.parse(JSON.stringify(state));
            // debugger
            return newState;
        default:
            return state;
    }
};

export default postsReducer;