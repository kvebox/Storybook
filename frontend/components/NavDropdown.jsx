import React from "react";
import { withRouter } from "react-router-dom";

class NavDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.node = React.createRef(); //Creates a reference to
        //hook onto the displayed node, so we can test
        //whether or not a click is inside it
        this.hideDropdown = this.hideDropdown.bind(this);
    }
    hideDropdown(e) { //this is the method we want to call to check where the user clicked
        if (!this.node.current.contains(e.target)) { //they didn't click inside the node
            this.props.hideDropdown(); //callback to parent to hide this component
        }
    }
    componentDidMount() { //add event listener to the entire document, to see where they click
        document.addEventListener("click", this.hideDropdown);
    }
    componentWillUnmount() { //clean up event listener when component is removed
        document.removeEventListener("click", this.hideDropdown);
    }

    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    userDropdown() {
        return (<>
            <li className="no-hover bold">{this.props.currentUser.username}</li>
            <li className="no-hover new-section" />
            <li onClick={this.redirect("/settings")}><i className="fas fa-cog" />Settings</li> //clickable li to link to a page
            <li onClick={this.props.logout}><i className="fas fa-sign-out-alt" /><div>Log Out</div></li>
        </>);
    }

    render() {
        return (
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
        );
    }
}
export default withRouter(NavDropdown);