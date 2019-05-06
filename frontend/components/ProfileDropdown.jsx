import React from "react";
import {withRouter} from "react-router-dom";

class ProfileDropdown extends React.Component{
  constructor(props){
    super(props);
    this.node = React.createRef(); //Creates a reference to
	  //hook onto the displayed node, so we can test
	  //whether or not a click is inside it
    this.userDropdown = this.userDropdown.bind(this);
    this.loginDropdown = this.loginDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }
  hideDropdown(e){ //this is the method we want to call to check where the user clicked
    if (!this.node.current.contains(e.target)) { //they didn't click inside the node
      this.props.hideDropdown(); //callback to parent to hide this component
    }
  }
  componentDidMount(){ //add event listener to the entire document, to see where they click
    document.addEventListener("click", this.hideDropdown);
  }
  componentWillUnmount(){ //clean up event listener when component is removed
    document.removeEventListener("click", this.hideDropdown);
  }
  redirect(url){
    return (e)=>{
      e.preventDefault();
      this.props.hideDropdown(); //hide the dropdown before changing the page
      this.props.history.push(url);
    };
  }
  userDropdown(){
    return (<>
              <li className="no-hover bold">{this.props.currentUser.username}</li>
              <li className="no-hover new-section"/>
              <li onClick={this.redirect("/settings")}><i className="fas fa-cog" />Settings</li> //clickable li to link to a page
              <li onClick={this.props.logout}><i className="fas fa-sign-out-alt" /><div>Log Out</div></li>
            </>);
  }
  loginDropdown(){
    return (<>
              <li onClick={this.props.showModal("login")}><i className="fas fa-sign-in-alt" /><div>Log In</div></li>
            </>);
  }
  render(){
    return (
      <ul className="profile-dropdown" ref={this.node}> //setting the components ref to our node - this is how we tell
		//react which component we want to look at to check clicks against
		//so we only hide it if we click outside it
        {this.props.loggedIn ? this.userDropdown() : this.loginDropdown()} //conditionally render different dropdown based on login status
      </ul>
    );
  }
}
export default withRouter(ProfileDropdown);