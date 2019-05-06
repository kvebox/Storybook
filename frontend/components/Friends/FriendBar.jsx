import React from 'react';
import { withRouter } from 'react-router';


class FriendBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="friend-bar">
                <h4> Friends </h4>
            </div>

        )
    }

}

export default withRouter(FriendBar);