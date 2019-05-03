import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

let nullSession = {
    id: null
};

const sessionReducer = (state=nullSession, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState.id = action.user.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            return nullSession;
        default:
            return state;
    }
};

export default sessionReducer;