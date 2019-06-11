import { connect } from 'react-redux';
import ProfileHeader from './ProfileHeader';
import { withRouter } from 'react-router';
import {fetchUser} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        userId: ownProps.match.params.userId,
        user: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileHeader));