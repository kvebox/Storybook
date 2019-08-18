import FeedIndexItem from './FeedIndexItem';
import { connect } from 'react-redux';
import { fetchUserPosts, deletePost, editPost, createPost } from '../../actions/post_actions.js';
import { fetchPostComments, createPostComment } from '../../actions/comment_actions.js';


const mapStateToProps = (state, ownProps) => ({
    // props: ownProps,
    currentUser: state.entities.users[state.session.id],
    // comments: state.entities.comments[ownProps.match.params.],
});

const mapDispatchToProps = dispatch => ({
    fetchPostComments: post => dispatch(fetchPostComments(post)),
    deletePost: (user, postId) => dispatch(deletePost(user, postId)),
    editPost: (user, post) => dispatch(editPost(user, post)),
    createPostComment: (post, comment) => dispatch(createPostComment(post, comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndexItem);
