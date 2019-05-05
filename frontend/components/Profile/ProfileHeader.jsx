import React from 'react';
import { withRouter } from 'react-router';


class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>Banner!</h1>
            </div>
        )
    }

}

export default withRouter(ProfileHeader);