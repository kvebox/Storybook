import React from 'react';
import { withRouter } from 'react-router';


class FeedIndexItem extends React.Component {
    constructor({props}) {
        super(props);
        this.state = {
            author_id: 0
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
                <img className="profile-pic" src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png"/>
                <h5>
                    {!(this.props.post.author == undefined) ? <a href={`#/users/${this.props.post.author.id}`}>{`${this.props.post.author.first_name} ${this.props.post.author.last_name}`}</a>
                    : <a href={`#/users/${this.props.user.id}`}>{`${this.props.user.first_name} ${this.props.user.last_name}`}</a>} 
                    
                    <span className="date">May 7, 2018</span>
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
                <img className="comment-placeholder" src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png"/>
                <input className="comment-input" type="text" 
                       placeholder="Write a comment..."/>
            </form>
            </div>
        </li>
        );
    }
};

export default withRouter(FeedIndexItem);