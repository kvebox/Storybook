import { connect } from 'react-redux';
import CreatePostModal from './CreatePostModal';
import { createPost } from '../../actions/post_actions.js';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    createPost: (user, post) => dispatch(createPost(user,post))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostModal);
