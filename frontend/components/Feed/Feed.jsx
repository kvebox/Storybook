import React from 'react';
import NavContainer from '../NavContainer';
import FeedContainer from './FeedContainer';
import PostCreateWidgetContainer from '../PostCreateWidgetContainer';

class Feed extends React.Component {
    render() {
        return (
            <div className="feed-body">
                <NavContainer />
                <PostCreateWidgetContainer />
                <FeedContainer />
            </div>
        )
    };
};

export default Feed;