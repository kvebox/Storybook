import React from 'react';
import { withRouter } from 'react-router';

class FeedDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.node = React.createRef();
        this.hideDropdown = this.hideDropdown.bind(this);
        // this.deletePost = this.deletePost.bind(this);
        }
    
    componentDidMount() { //add event listener to the entire document, to see where they click
        document.addEventListener("click", this.hideDropdown);
    }
    componentWillUnmount() { //clean up event listener when component is removed
        document.removeEventListener("click", this.hideDropdown);
    }
    
    hideDropdown(e){
        if (!this.node.current.contains(e.target)){
            this.props.hideDropdown();
        }
    }

    deletePost(postId){
        // this.props.deletePost(postId);
        // console.log(this.props.post.id);
        // this.props.deletePost(this.props.post.author, this.props.post);
        console.log(this.props.key);
    }

    render() {
        return (
        <ul ref={this.node} className='dropdownContainer'>
            <li className='dropdownListItem'>Edit Post</li>
            <div className='dropdownSpacer'></div>
            <li className='dropdownListItem'
                onClick={() => this.deletePost()}
                // onClick={this.deletePost(this.props.post.postId)}
                >Delete</li>
        </ul>
    )}

}

export default withRouter(FeedDropdown);