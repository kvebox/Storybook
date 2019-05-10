import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        }


    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        // debugger
        return (
            <div className="loggedin-nav">
            <div className="loggedin-nav-content-container">
                <div className="search-bar-container">
                    <div className="nav-logo"><img src="https://1.bp.blogspot.com/-XN87X9haRqU/XNWjlCpXc7I/AAAAAAAABUY/xbMUwHiwobEqMQ8GnANynrSVfr3wXQr7gCLcBGAs/s1600/fb_logo-10.png"/></div>
                    <input className="search-bar" type='text'
                        placeholder="Search"/>
                </div>

                <div className="nav-right-container">
                    <div className="login-link-container">
                        <div className="login-link"><Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.first_name}</Link></div>
                        <div className="login-link"><Link to="/feed">Home</Link></div>
                        <div className="login-link"><a href="#">Create</a></div>
                    </div>

                    <div className="nav-icon-options">
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" className="logout-button" onClick={(e) => this.logout(e)}/>
                    </div>

                    <div className="nav-icon-option-extras">
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    <img src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png" />
                    </div>

                </div>


                </div>
            </div>

        )
    }

}

export default withRouter(NavBar);