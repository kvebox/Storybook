import React from 'react';

export default ({currentUser}) => {
    return (
        <div className="feed-navigation-body">
            <div className="navigation-profile"> 
                <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                <div>{currentUser.first_name} {currentUser.last_name} </div>
            </div>

            <ul className="navigation-container">
                <li>
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    <div className="navigation-title">
                    <div>News Feed</div>
                    <span>...</span>
                    </div>
                </li>
                {/* <li>
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    <div>Messenger</div>
                    <span>...</span>
                </li>
                <li>
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    <div>Watch</div>
                    <span>...</span>
                </li>
                <li>
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    <div>Marketplace</div>
                    <span>...</span>
                </li> */}
            </ul>

        </div>
    );
};

