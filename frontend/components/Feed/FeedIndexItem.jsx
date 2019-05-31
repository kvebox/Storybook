import React from 'react';
import { withRouter } from 'react-router';
import Moment from 'react-moment';
import 'moment-timezone';


class FeedIndexItem extends React.Component {
    constructor({props}) {
        super(props);
        this.state = {
            author_id: 0,
            created_at: ""
        };

    }
    // let date = post.created_at;
    // let year = date.slice(0, 4);
    // let month = date.slice(5,7);
    
    handleSubmit(e){
        e.preventDefault();
        // this.props.deletePost(this.props.currentUser)

    }

    render() {
    return (
        <li className="posts">
            <div className="options"><a href="#">...</a></div>
            <div className="post-author">
                <div className="profile-crop">
                    <img className="profile-pic" src='/images/profile_1.png'/>
                </div>
                <h5>
                    {!(this.props.post.author == undefined) ? <a href={`#/users/${this.props.post.author.id}`}>{`${this.props.post.author.first_name} ${this.props.post.author.last_name}`}</a>
                    : <a href={`#/users/${this.props.user.id}`}>{`${this.props.user.first_name} ${this.props.user.last_name}`}</a>} 
                    
                    <span className="date"><Moment format="MMM DD, YYYY">{this.props.post.created_at}</Moment></span>
                </h5>
            </div>
            
            <div className="post-content">{this.props.post.body}</div>

            <div className="post-footer">


            <div className="post-options">
                <span>Like</span>
                <span>Comment</span>
                <span>Share</span>
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