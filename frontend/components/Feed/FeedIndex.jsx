import React from 'react';
import PostCreateWidget from '../PostCreateWidget';
import { withRouter } from 'react-router';


class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="feed_index">
                <PostCreateWidget />
                <h1> Feed! </h1>

            </div>

        )
    }

}

export default withRouter(FeedIndex);