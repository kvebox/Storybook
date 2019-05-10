import React from 'react';

export default ({currentUser}) => {
    return (
        <div className="feed-navigation-body">
            <div className="navigation-profile"> 
                <div className="nav-profile-crop">
                <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                </div>
                <div><a href={`#/users/${currentUser.id}`} >{currentUser.first_name} {currentUser.last_name} </a></div>
            </div>

            <ul className="navigation-container">
                <li className="nav-target">
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    <div className="navigation-title">
                    <div>News Feed</div>
                    <div className="nav-expand">...</div>
                    </div>
                </li>
                <li>
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    <div className="navigation-title">
                    <div>Messenger</div>
                    </div>
                </li>
                <li>
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    <div className="navigation-title">
                    <div>Watch</div>
                    </div>
                </li>
                <li>
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    <div className="navigation-title">
                    <div>Marketplace</div>
                    </div>
                </li>
            </ul>

        </div>
    );
};

