import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST  } from '../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';


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
            delete newState[action.post.id];
            return newState;
        case RECEIVE_COMMENT:
            newState = JSON.parse(JSON.stringify(state));
            newState[action.comment.post.id].comments.push(action.comment);
            return newState;
        case REMOVE_COMMENT:
            newState = JSON.parse(JSON.stringify(state));
            let comments = newState[action.comment.post.id].comments;
            for (let i = 0; i < comments.length; i++){
                if (comments[i].id === action.comment.id){
                    newState[action.comment.post.id].comments.splice(i,1);
                    break;
                }
            }
            return newState;
        case RECEIVE_LIKE:
            newState = JSON.parse(JSON.stringify(state));
            newState[action.like.post_id].likes.push(action.like);
            return newState;
        case REMOVE_LIKE:
            newState = JSON.parse(JSON.stringify(state));
            let likes = newState[action.like.post_id].likes;
            for (let i = 0; i < likes.length; i++) {
                if (likes[i].id === action.like.id) {
                    newState[action.like.post_id].likes.splice(i, 1);
                    break;
                }
            }
            return newState;
        default:
            return state;
    }
};

export default postsReducer;