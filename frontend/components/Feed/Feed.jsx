import React from 'react';
import NavContainer from '../NavContainer';
import FeedContainer from './FeedContainer';
import PostCreateWidgetContainer from '../PostCreateWidgetContainer';

class Feed extends React.Component {
    render() {
        return (
            <div className="feed-body">
                <NavContainer />
                <div className="spacer"></div>
                <FeedContainer />
            </div>
        )
    };
};

export default Feed;