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
                <div className="search-bar_container">
                    <input className="search-bar" type='text'
                        placeholder="Search"/>
                </div>
                <div className="login-link-container">
                    <div className="login-link"><Link to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.first_name}</Link></div>
                    <div className="login-link"><Link to="/feed">Home</Link></div>
                    <div className="login-link"><a href="#">Create</a></div>
                </div>
                <button type="logout" onClick={(e) => this.logout(e)}>Logout</button>
            </div>

        )
    }

}

export default withRouter(NavBar);