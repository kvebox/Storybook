import FeedIndex from './FeedIndex';
import {connect} from 'react-redux';
import {fetchUserPosts, fetchPost, deletePost, editPost} from '../../actions/post_actions.js';

const mapStateToProps = state => ({
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
    currentUser: state.entities.users[state.session.id],
    modal: false
});

const mapDispatchToProps = dispatch => ({
    fetchUserPosts: user => dispatch(fetchUserPosts(user)),
    deletePost: (user, post) => dispatch(deletePost(user,post)),
    editPost: (user, post) => dispatch(editPost(user, post))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
