import React from 'react';
import NavContainer from '../NavContainer';
import FeedContainer from './FeedContainer';

class Feed extends React.Component {
    render() {
        return (
            <div >
                <NavContainer />
                <FeedContainer />
            </div>
        )
    };
};

export default Feed;