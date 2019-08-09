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


            <ul className='navigation-container'>
                <div className='navigation-headers'>Contact</div>
                <li>
                    <a className='navigation-link' href='https://twitter.com/kvebox'>
                    <img src='/images/icons_twitter.png' alt='icon twitter' />
                    <div className="navigation-title">
                        <div>Twitter</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a className='navigation-link' href='https://github.com/kvebox'>
                    <img src='/images/icons_github.png' alt='icon github' />
                    <div className="navigation-title">
                        <div>Github</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a className='navigation-link' href='https://www.linkedin.com/in/vhjoh/'>
                    <img src='/images/icons_linkedin.png' alt='icon linkedin' />
                    <div className="navigation-title">
                        <div>LinkedIn</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a className='navigation-link' href='https://www.instagram.com/kvebox/'>
                    <img src='/images/icons_instagram.png' alt='icon instagram' />
                    <div className="navigation-title">
                        <div>Instagram</div>
                    </div>
                    </a>
                </li>
                <li>
                    <a className='navigation-link' href='https://www.tumblr.com/kvebox/'>
                    <img src='/images/icons_tumblr.png' alt='icon tumblr' />
                    <div className="navigation-title">
                        <div>Tumblr</div>
                    </div>
                    </a>
                </li>
            </ul>


            {/* <ul className='navigation-container'>
            <div className='navigation-headers'>Explore</div>
                <li>
                    <img src='/images/icons_events.png' alt='icon events' />
                    <div className="navigation-title">
                    <div>Events</div>
                    </div>
                </li>
                <li>
                    <img src='/images/icons_pages.png' alt='icon pages' />
                    <div className="navigation-title">
                        <div>Pages</div>
                    </div>
                </li>
                <li>
                    <img src='/images/icons_oculus.png' alt='icon oculus' />
                    <div className="navigation-title">
                        <div>Oculus</div>
                    </div>
                </li>
                <li>
                    <img src='/images/icons_groups.png' alt='icon groups' />
                    <div className="navigation-title">
                        <div>Groups</div>
                    </div>
                </li>
                <li>
                    <img src='/images/icons_fundraiser.png' alt='icon fundraisers' />
                    <div className="navigation-title">
                    <div>Fundraisers</div>
                    </div>
                </li>
            </ul> */}

        </div>
    );
};

