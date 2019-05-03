import { connect } from 'react-redux';
import { login, logout } from '../actions/session_actions';
import NavBar from './NavBar';

const mapStateToProps = state => {
    let users = state.entities.users;
    let formType = 'logout';
    return {
        currentUser: users[state.session.id],
        formType: formType
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

