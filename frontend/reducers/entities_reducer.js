import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

const entititesReducer = combineReducers({
    users: usersReducer
});

export default entititesReducer;