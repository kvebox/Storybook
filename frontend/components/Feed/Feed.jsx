import React from 'react';
import NavContainer from '../NavContainer';
import FeedContainer from './FeedContainer';
import PostCreateWidgetContainer from '../PostCreateWidgetContainer';
import FeedNavigationBarContainer from './FeedNavigationBarContainer';
import FeedWidgetBarContainer from './FeedWidgetBarContainer';


class Feed extends React.Component {
    render() {
        return (
            <div className="feed-body">
                <NavContainer />
                    <div className="spacer"></div>
                <div className="main-container">
                    <FeedNavigationBarContainer  />
                    <FeedContainer />
                    <FeedWidgetBarContainer />
                </div>
            </div>
        )
    };
};

export default Feed;