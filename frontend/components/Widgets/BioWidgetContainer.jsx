import BioWidget from './BioWidget';
import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
    // userId: ownProps.match.params.userId,
    // user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
    // comments: Object.keys(state.entities.comments).map(key => state.entities.comments[key])
});

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    editUser: userId => dispatch(editUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BioWidget);


