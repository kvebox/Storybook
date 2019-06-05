import React from 'react';
import { withRouter } from 'react-router';
import Moment from 'react-moment';
import 'moment-timezone';
import { Link } from 'react-router-dom';


class FeedIndexItem extends React.Component {
    constructor({props}) {
        super(props);
        this.state = {
            author_id: 0,
            created_at: ""
        };

    }

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
                    {!(this.props.post.author == undefined) ? <Link to={`/users/${this.props.post.author.id}`}>{`${this.props.post.author.first_name} ${this.props.post.author.last_name}`}</Link>
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