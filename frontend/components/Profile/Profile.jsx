import React from 'react';
import NavContainer from '../NavContainer';
import ProfileHeaderContainer from './ProfileHeaderContainer';
import FeedContainer from '../Feed/FeedContainer';
import FriendBarContainer from '../Friends/FriendBarContainer';
import WidgetSideBar from './WidgetSideBar';

class Profile extends React.Component {
    render () {
        return (
        <div className="profile-body">
            <NavContainer />
            {/* <FriendBarContainer /> */}
                <div className="profile-content">
                    <ProfileHeaderContainer /> 
                    <div className="profile-main-body">
                        <WidgetSideBar />
                        <FeedContainer /> 
                    </div>
                </div>
        </div>
        )
    }
}

export default Profile;
