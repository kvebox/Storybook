import React from 'react';
import { logout } from '../actions/session_actions';
import { withRouter } from 'react-router';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        }


    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <div className="login-form">
                <div className="search-bar_container">
                    <input className="search-bar" type='text'
                        placeholder="Search"/>
                </div>
                <button type="logout" onClick={(e) => this.logout(e)}>Logout</button>
            </div>

        )
    }

}

export default withRouter(NavBar);