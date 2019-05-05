import React from 'react';
import NavContainer from '../NavContainer';
import ProfileHeaderContainer from './ProfileHeaderContainer';

class Profile extends React.Component {
    render () {
        return (
            <>
            <NavContainer />
            <div>
                <ProfileHeaderContainer />  
            </div>
            </>
        )
    }
}

export default Profile;
