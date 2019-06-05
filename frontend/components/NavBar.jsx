import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

// import menuFriends from '../../app/assets/images/menu_friends.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.node = React.createRef();
        this.state = {
            dropdown: false
        }
        this.getNavDropdown = this.getNavDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    }


    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    getNavDropdown(){
        const dropdown = document.getElementsByClassName('navDropdown');
        dropdown[0].style.display = 'block';
        this.setState({dropdown: !this.state.dropdown});
    }

    componentDidMount(){
        document.addEventListener('click', this.hideDropdown);
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.hideDropdown);
    }

    hideDropdown(e){
        // console.log(this.componentDidUpdate)
        if (!this.node.current.contains(e.target) && this.state.dropdown){
            const dropdown = document.getElementsByClassName('navDropdown');
            dropdown[0].style.display = 'none';
            // this.setState({dropdown: false})
            // console.log('hi')
        }
        // console.log(e.target)
        // if (!this.componentDidUpdate.current.contains(e.target)){
        // }
    }

    render() {
        // debugger
        return (
            <div className="loggedin-nav">
            <div className="loggedin-nav-content-container">
                <div className="search-bar-container">
                    <div className="nav-logo"><img src="https://1.bp.blogspot.com/-XN87X9haRqU/XNWjlCpXc7I/AAAAAAAABUY/xbMUwHiwobEqMQ8GnANynrSVfr3wXQr7gCLcBGAs/s1600/fb_logo-10.png"/></div>
                    {/* <input className="search-bar" type='text'
                        placeholder="Search"/> */}
                </div>

                <div className="nav-right-container">
                    <div className="login-link-container">
                        <div className="login-link login-name">
                            <div className='navCrop'><img className='navProfile' src='/images/profile_2.png' /></div>
                            <Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.first_name}</Link></div>
                        <div className="login-link"><Link to="/feed">Home</Link></div>
                        <div className="login-link"><a href="#">Create</a></div>
                    </div>

                    <div className='navIconsAll'>
                        <div className="nav-icon-options">
                        <img src='/images/menu_friends.png' alt='nav_icon_friends' />
                        <img src='/images/menu_messenger.png' alt='nav_icon_messenger' />
                        <img className='navLast' src='/images/menu_notification.png' alt='nav_icon_notifications' className="logout-button"/>
                        {/* <div className='navSpacer'></div> */}
                        </div>

                        <div className='space'></div>

                        <div className="nav-icon-option-extras">
                        <img src='/images/menu_help.png' alt='nav_icon_help' />
                                <div className='menuDropdownTrigger'>
                                    <img src='/images/menu_dropdown.png' 
                                         alt='nav_options'
                                         onClick = {() => this.getNavDropdown()} />
                                    <div className='navDropdown'
                                         ref={this.node}>
                                        <ul className='navDropdownContainer'>
                                            <li className='navDropdownListItem'>Advertising on Facebook</li>
                                        </ul>
                                        <div className='dropdownSpacer'></div>
                                        <ul className='navDropdownContainer'>
                                            <li className='navDropdownListItem'>Activity Log</li>
                                            <li className='navDropdownListItem'>News Feed Preferences</li>
                                            <li className='navDropdownListItem'>Settings</li>
                                            <li className='navDropdownListItem'
                                                onClick={(e) => this.logout(e)}>Logout</li>
                                        </ul>
                                    </div>
                        </div>


                        </div>
                    </div>

                </div>


                </div>
            </div>

        )
    }

}

export default withRouter(NavBar);