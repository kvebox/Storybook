import React from 'react';
import { withRouter } from 'react-router';


class FriendBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };
    }

    friendbar(){
        if (window.innerWidth < 1250){
            return (
                // console.log('hello')
                <div className="friend-bar">
                <div className='collapsedFriendBar'>
                    <div className='collapsedChatNumber'>Chat (0)</div>
                    <div className='collapseChatContainer'>
                        <img className='collapseChatIcon' src='/images/chat_compose.png'></img>
                        <img className='collapseChatIcon' src='/images/chat_group.png'></img>
                        <img className='collapseChatIcon' src='/images/chat_options.png'></img>
                    </div>
                </div>
                </div>
            )
        }
    }


    render() {
        return (
            <div className='friendBarContainer'>
                <div className='friendBarSpacer'></div>
            <div className="friendBar">
                <div className='friendBarHeader'>CONTACTS</div>
                <div className='friendBarSettingsContainer'>
                    <input className='friendBarSearch'></input>
                        {/* <label>Search</label> */}
                        <img className='friendBarSearchIcon' src='/images/friend_search.png'/>
                    <div className='friendBarIcons'>
                        <img className='friendBarIcon' src='/images/friend_options.png'></img>
                        <img className='friendBarIcon' src='/images/friend_compose.png'></img>
                        <img className='friendBarIcon' src='/images/friend_group.png'></img>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}

export default withRouter(FriendBar);