import { connect } from 'react-redux';
import { login, logout } from '../actions/session_actions';
import SessionForm from './SessionForm';

const mapStateToProps = state => {
    let users = state.entities.users;
    let errors = state.entities.errors;
    let formType = 'login';
    return {
        currentUser: users[state.session.id],
        errors: errors.session,
        formType: formType
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
