import FeedIndex from './FeedIndex';
import {connect} from 'react-redux';
import {fetchUserPosts, fetchPost} from '../../actions/post_actions.js';

const mapStateToProps = state => ({
    posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchUserPosts: user => dispatch(fetchUserPosts(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
