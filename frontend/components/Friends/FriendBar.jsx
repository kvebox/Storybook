import React from 'react';
import { withRouter } from 'react-router';


class FriendBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            windowsize: 0
        };
    }

    componentDidUpdate(){
        window.addEventListener('resize', this.friendbar);
        // <body onresize="myFunction()"></body>
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.friendbar);
    }

    friendbar(){
        // if (window.innerWidth < 1200){
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
        // } else {
        // return (
        // <div className='friendBarContainer'>
        //     <div className="friendBar">
        //         <div className='friendBarSpacer'></div>
        //         <div className='friendBarHeader'>CONTACTS</div>
        //         <div className='friendBarSettingsContainer'>
        //             <label><img className='friendBarSearchIcon' src='/images/friend_search.png' /></label>
        //             <input className='friendBarSearch'
        //                 placeholder='Search'>
        //             </input>


        //             <div className='friendBarIcons'>
        //                 <img className='friendBarIcon' src='/images/friend_options.png'></img>
        //                 <img className='friendBarIcon' src='/images/friend_compose.png'></img>
        //                 <img className='friendBarIcon' src='/images/friend_group.png'></img>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // )
    // }
    }


    render() {
        return (
            <>
            {this.friendbar()}
            </>
        )
    }

}

export default withRouter(FriendBar);