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
        console.log(window.innerWidth);
        if (window.innerWidth < 1250){
            return (
                // console.log('hello')
                <div className='collapsedFriendBar'>
                    <div className='collapsedChatNumber'>Chat (0)</div>
                    <div className='collapseChatContainer'>
                        <img className='collapseChatIcon' src='/images/chat_compose.png'></img>
                        <img className='collapseChatIcon' src='/images/chat_group.png'></img>
                        <img className='collapseChatIcon' src='/images/chat_options.png'></img>
                    </div>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="friend-bar">
                <h4> Friends </h4>
                { this.friendbar()}
            </div>

        )
    }

}

export default withRouter(FriendBar);