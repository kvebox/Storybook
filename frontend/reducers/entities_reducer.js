import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import errorsReducer from './errors_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    errors: errorsReducer
});

export default entitiesReducer;