import {connect} from 'react-redux';
import {signup, login, logout} from '../actions/session_actions';
import SignUp from './SignUp';
import SessionForm from './SessionForm';

const mapStateToProps = state => {
    let users = state.entities.users;
    let formType = 'signup';
    return {
        currentUser : users[state.session.id],
        formType: formType
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
