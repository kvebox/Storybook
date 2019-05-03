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
                <button type="logout" onClick={(e) => this.logout(e)}>Logout</button>
            </div>

        )
    }

}

export default withRouter(NavBar);