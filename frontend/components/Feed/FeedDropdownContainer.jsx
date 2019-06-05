import FeedDropdown from './FeedDropdown';
import { connect } from 'react-redux';
import { fetchUserPosts, fetchPost, deletePost, editPost } from '../../actions/post_actions.js';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    dropdown: false
});

const mapDispatchToProps = dispatch => ({
    deletePost: (user, post) => dispatch(deletePost(user, post)),
    editPost: (user, post) => dispatch(editPost(user, post))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedDropdown);
