import { RECEIVE_LIKE, REMOVE_LIKE } from '../util/like_api_util';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case REMOVE_LIKE:
            delete newState[action.like];
            return newState;
        default:
            return state;
    }

};

export default likesReducer;