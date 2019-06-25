import PostComment from './PostComment';
import { connect } from 'react-redux';
import {deletePostComment, fetchPostComments} from '../../actions/comment_actions';

const mapStateToProps = state => ({
    comments: Object.keys(state.entities.comments).map(key => state.entities.comments[key])
});

const mapDispatchToProps = dispatch => ({
    fetchPostComments: (post) => dispatch(fetchPostComments(post)),
    deletePostComment: (post, comment) => dispatch(deletePostComment(post, comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);


