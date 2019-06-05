import React from 'react';
import { withRouter } from 'react-router';

class FeedDropdown extends React.Component {
    constructor(props) {
        super(props);
        }

    render() {
        return (
        <ul className='dropdownContainer'>
            <li className='dropdownListItem'>Edit Post</li>
            <div className='dropdownSpacer'></div>
            <li className='dropdownListItem'>Delete</li>
        </ul>
    )}

}

export default withRouter(FeedDropdown);