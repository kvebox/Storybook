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
            <div className="login-form">
                <div className="search-bar_container">
                    <input className="search-bar" type='text'
                        placeholder="Search"/>
                </div>
                <div>
                    <Link to={`/users/${this.props.currentUser.id}`}>User</Link>
                </div>
                <button type="logout" onClick={(e) => this.logout(e)}>Logout</button>
            </div>

        )
    }

}

export default withRouter(NavBar);