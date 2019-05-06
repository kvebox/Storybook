import React from 'react';
import ProfileDropdown from "./profile_dropdown";
class ProfileButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showDropdown: false }; //keep track of the dropdown in state
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    }
    toggleDropdown() {
        this.setState({ showDropdown: !this.state.showDropdown });
    }
    hideDropdown(cb) { //this is the callback to hide the dropdown, along with an optional callback (for showing the modal or logging out)
        this.setState({ showDropdown: false }, cb);
    }

    render() {
        return (
            <>
                <button className="profile-btn" onClick={this.toggleDropdown}><i className="fas fa-user"></i></button> //toggle dropdown if they click the button
                {this.state.showDropdown ? <ProfileDropdown //ternary to show the dropdown, or an empty string, depending on state
                    hideDropdown={this.hideDropdown} //callback to hide the dropdown
                    loggedIn={this.props.loggedIn}
                    showModal={(type) => () => this.hideDropdown(this.props.showModal(type))} //if they click on the modal, hide dropdown and then show the modal
                    currentUser={this.props.currentUser}
                    logout={() => { this.hideDropdown(this.props.logout); }} //callback to logout the user after hiding the dropdown, so it is gone before the user is removed, as it may be looking at user information to render username
                /> : ""} //end of ternary, rendering an empty string instead if the dropdown is hidden, forcing it to unmount
            </>
        );
    }
}
export default ProfileButton;