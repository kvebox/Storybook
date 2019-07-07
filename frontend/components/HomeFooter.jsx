import React from 'react';

class HomeFooter extends React.Component {
    render () {
        return (
            <div className="footer">
                <ul className="language-list">
                    <li className="default"><a href="#">English (US)</a></li>
                    <li><a href="#">Español</a></li>
                    <li><a href="#">Français (France)</a></li>
                    <li><a href="#">中文(简体)</a></li>
                    <li><a href="#">العربية</a></li>
                    <li><a href="#">Português (Brasil)</a></li>
                    <li><a href="#">Italiano</a></li>
                    <li><a href="#">한국어</a></li>
                    <li><a href="#">Deutsch</a></li>
                    <li><a href="#">ह िन्दी</a></li>
                    <li><a href="#">日本語</a></li>
                </ul>

                {/* <div className="linebreak">
                </div> */}

                <ul className="footer-links">
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Messenger</a></li>
                    <li><a href="#">Facebook Lite</a></li>
                    <li><a href="#">Find Friends</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Profiles</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Page Categories</a></li>
                    <li><a href="#">Places</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Groups</a></li>
                    <li><a href="#"> Instagram</a></li>
                    <li><a href="#">Local</a></li>
                    <li><a href="#">Fundraisers</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Create Ad</a></li>
                    <li><a href="#">Create Page</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">Ad Choices</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Account Security</a></li>
                    <li><a href="#">Login Help</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>
        )
    }
}

export default HomeFooter;