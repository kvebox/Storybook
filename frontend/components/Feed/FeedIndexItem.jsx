import React from 'react';
import { withRouter } from 'react-router';
import Moment from 'react-moment';
import 'moment-timezone';
import { Link } from 'react-router-dom';
import FeedDropdownContainer from './FeedDropdownContainer';


class FeedIndexItem extends React.Component {
    constructor({props}) {
        super(props);
        this.state = {
            author_id: 0,
            created_at: "",
            dropdown: false
        };
        this.hideDropdown = this.hideDropdown.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        // this.props.deletePost(this.props.currentUser)

    }

    hideDropdown(){
        this.setState({dropdown: false});
    }

    getDropdown(){
        this.setState({dropdown: !this.state.dropdown});
    }

    render() {
    return (
        <li className="posts">
            <div className="options"><div onClick={() => this.getDropdown()}className='options-dropdown-trigger'>...</div>
                {(this.state.dropdown) ? <FeedDropdownContainer 
                        hideDropdown = {this.hideDropdown}
                        // postId = {this.props.postId}
                        deletePost = {this.props.deletePost}
                        post = {this.props.post} /> : ''}
                </div>
            
            <div className="post-author">
                <div className="profile-crop">
                    <img className="profile-pic" src='/images/profile_1.png'/>
                </div>
                <h5>
                    {!(this.props.post.author == undefined) ? <Link onClick={() => window.scrollTo(0, 0)} to={`/users/${this.props.post.author.id}`}>{`${this.props.post.author.first_name} ${this.props.post.author.last_name}`}</Link>
                        : <Link to='#'>{`${this.props.user.first_name} ${this.props.user.last_name}`}</Link>}
                    <span className="date"><Moment format="MMM DD, YYYY">{this.props.post.created_at}</Moment></span>
                </h5>
            </div>
            
            <div className="post-content">{this.props.post.body}</div>

            <div className="post-footer">


            <div className="post-options">
                <span><img className='post_icon' src='/images/like.png'></img>Like</span>
                <span><img className='post_icon' src='/images/comment.png'></img>Comment</span>
                {/* <span><img className='post_icon' src='/images/share.png'></img>Share</span> */}
            </div>

            <form className="comment">
                <div className="comment-crop">
                        <img className="comment-placeholder" src="/images/profile_2.png"/>
                </div>
                <input className="comment-input" type="text" 
                       placeholder="Write a comment..."/>
            </form>
            </div>
        </li>
        );
    }
};

export default withRouter(FeedIndexItem);