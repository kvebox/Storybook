import React from 'react';

export default ({currentUser}) => {
    return (
        <div className="feed-navigation-body">
            <div className="navigation-profile"> 
                <div className="nav-profile-crop">
                <img className='nav-profile' src="/images/profile_2.png" />
                </div>
                <div><a href={`#/users/${currentUser.id}`} >{currentUser.first_name} {currentUser.last_name} </a></div>
            </div>

            <ul className="navigation-container">
                <li className="nav-target">
                    <img src='/images/icons_newsFeed.png' alt='icon newsfeed' />
                    <div className="navigation-title">
                    <div>News Feed</div>
                    <div className="nav-expand">...</div>
                    </div>
                </li>
                <li>
                    <img src='/images/icons_messenger.png' alt='icon messenger' />
                    <div className="navigation-title">
                    <div>Messenger</div>
                    </div>
                </li>
                <li>
                    <img src='/images/icons_watch.png' alt='icon watch' />
                    <div className="navigation-title">
                    <div>Watch</div>
                    </div>
                </li>
                <li>
                    <img src='/images/icons_marketplace.png' alt='icon marketplace' />
                    <div className="navigation-title">
                    <div>Marketplace</div>
                    </div>
                </li>
            </ul>

            <ul className="navigation-container">
                <li>
                    <img src='/images/icons_pages.png' alt='icon pages' />
                    <div className="navigation-title">
                        <div>Pages</div>
                    </div>
                </li>
                <li>
                    <img src='/images/icons_groups.png' alt='icon groups' />
                    <div className="navigation-title">
                        <div>Groups</div>
                    </div>
                </li>
                <li>
                    <img src='/images/icons_oculus.png' alt='icon oculus' />
                    <div className="navigation-title">
                        <div>Oculus</div>
                    </div>
                </li>
                <li>
                    <img src='/images/icons_events.png' alt='icon events' />
                    <div className="navigation-title">
                    <div>Events</div>
                    </div>
                </li>
                <li>
                    <img src='/images/icons_fundraiser.png' alt='icon fundraisers' />
                    <div className="navigation-title">
                    <div>Fundraisers</div>
                    </div>
                </li>
            </ul>

        </div>
    );
};

