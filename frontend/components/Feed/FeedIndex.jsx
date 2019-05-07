import React from 'react';
import PostCreateWidgetContainer from '../PostCreateWidgetContainer';
import { withRouter } from 'react-router';
import FeedIndexItem from './FeedIndexItem';

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserPosts(this.props.currentUser);
    }


    render() {
        let allposts = this.props.posts.map((post) => {
            debugger
            return <FeedIndexItem key={`post${post.id}`} post={post}/>
        });
        return (
            <div className="feed_index">
                <PostCreateWidgetContainer />
                <ul>
                    <h1> All Posts </h1>
                    {allposts}
                </ul>

            </div>

        )
    }

}

export default withRouter(FeedIndex);