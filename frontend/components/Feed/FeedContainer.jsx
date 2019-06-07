import FeedIndex from './FeedIndex';
import {connect} from 'react-redux';
import {fetchUserPosts, fetchPost, deletePost, editPost} from '../../actions/post_actions.js';

const mapStateToProps = state => ({
    postsAll: Object.keys(state.entities.posts).map(key => [state.entities.posts[key], key]),
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
    currentUser: state.entities.users[state.session.id],
    modal: false
});

const mapDispatchToProps = dispatch => ({
    fetchUserPosts: user => dispatch(fetchUserPosts(user)),
    deletePost: (user, postId) => dispatch(deletePost(user,postId)),
    editPost: (user, post) => dispatch(editPost(user, post))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
