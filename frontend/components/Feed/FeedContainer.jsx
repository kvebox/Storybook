import FeedIndex from './FeedIndex';
import { connect } from 'react-redux';
import { fetchUserPosts, deletePost, editPost, createPost } from '../../actions/post_actions.js';
import { fetchPostComments, createPostComment } from '../../actions/comment_actions.js';


const mapStateToProps = state => ({
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchUserPosts: user => dispatch(fetchUserPosts(user)),
    deletePost: (user, postId) => dispatch(deletePost(user,postId)),
    editPost: (user, post) => dispatch(editPost(user, post)),
    createPost: (user,post) => dispatch(createPost(user, post)),
    createPostComment: (post,comment) => dispatch(createPostComment(post,comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
