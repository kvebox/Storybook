import FeedIndex from './FeedIndex';
import { connect } from 'react-redux';
import { fetchUserPosts, deletePost, editPost, createPost } from '../../actions/post_actions.js';
import { fetchPostComments, createPostComment } from '../../actions/comment_actions.js';
import { fetchPostLikes, createPostLike } from '../../actions/like_actions';


const mapStateToProps = state => ({
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
    currentUser: state.entities.users[state.session.id],
    edited: false,
});

const mapDispatchToProps = dispatch => ({
    fetchPostLikes: post => dispatch(fetchPostLikes(post)),
    createPostLike: (user, like) => dispatch(createPostLike(user,like)),
    fetchUserPosts: user => dispatch(fetchUserPosts(user)),
    fetchPostComments: post => dispatch(fetchPostComments(post)),
    deletePost: (user, postId) => dispatch(deletePost(user,postId)),
    editPost: (user, post) => dispatch(editPost(user, post)),
    createPost: (user,post) => dispatch(createPost(user, post)),
    createPostComment: (post,comment) => dispatch(createPostComment(post,comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
