import React from 'react';
import { withRouter } from 'react-router';
import Moment from 'react-moment';
import 'moment-timezone';
import { Link } from 'react-router-dom';
import FeedDropdownContainer from './FeedDropdownContainer';
import EditModal from './EditModal';
import PostCommentContainer from './PostCommentContainer';


class FeedIndexItem extends React.Component {
    constructor({props}) {
        super(props);
        this.state = {
            comments: null,
            author_id: 0,
            created_at: "",
            dropdown: false,
            modal: false,
            commentBody: ""
        };

        
        this.modal = React.createRef();
        this.hideDropdown = this.hideDropdown.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.triggerEditModal = this.triggerEditModal.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.focus = this.focus.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let comment = {
            post_id: this.props.post.id,
            body: this.state.commentBody,
            comment_author: this.props.user.id
        };
        this.props.createPostComment(this.props.post, comment)
        .then(() => this.setState({commentBody: ''}));
    }

    handleUpdate(e){
        this.setState({commentBody: e.target.value});
    }
    

    triggerEditModal(){
        this.setState({ modal: !this.state.modal });
    }

    hideModal(){
        this.setState({modal: false});
    }

    hideDropdown(){
        this.setState({dropdown: false});
    }

    getDropdown(){
        this.setState({dropdown: !this.state.dropdown});
    }

    componentDidMount(){
    }

    focus(className, e){
        // console.log(e.target)
        // let f = document.getElementsByClassName(className);
        // console.log(f);
        // f[0].focus();
    }

    componentDidUpdate(prevProps) {

    }

    render() {
    return (
        <div className='post-index-item-container'>
            {(this.state.modal) ?

                <EditModal
                    forwardRef={this.modal}
                    editPost={this.props.editPost}
                    currentUser={this.props.user}
                    post={this.props.post}
                    hideModal={this.hideModal}
                    triggerEdit={this.props.triggerEdit}
                     />

                : ''}
        <li className="posts">
                <div className="options">
                <div onClick={() => this.getDropdown()} className='options-dropdown-trigger'>···</div>

                    {(this.state.dropdown) ? <FeedDropdownContainer 
                        hideDropdown = {this.hideDropdown}
                        triggerEditModal={this.triggerEditModal}
                        currentUser = {this.currentUser}
                        deletePost = {this.props.deletePost}
                        post = {this.props.post} /> : ''}

                </div>
            
            <div className="post-author">
                <div className="profile-crop">
                    <img className="profile-pic" src='/images/profile_2.png'/>
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
                <span onClick={(e) => this.focus('comment-input', e)}><img className='post_icon' src='/images/comment.png'></img>Comment</span>
                {/* <span><img className='post_icon' src='/images/share.png'></img>Share</span> */}
            </div>

            <ul className='post-comments-container'>
                    <PostCommentContainer post={this.props.post} />
            </ul>

            <form className="comment" onSubmit={e => this.handleSubmit(e)}>
                <div className="comment-crop">
                        <img className="comment-placeholder" src="/images/profile_2.png"/>
                </div>
                <div className="comment-input-container">
                    <input className="comment-input" type="text" 
                           placeholder="Write a comment..."
                           onChange={e => this.handleUpdate(e)}/>
                    <div className="comment-icon-container">
                        <img className="comment-option-icon" src="/images/comment_reaction.png" />
                        <img className="comment-option-icon" src="/images/comment_photo.png" />
                        <img className="comment-option-icon" src="/images/comment_gif.png" />
                        <img className="comment-option-icon" src="/images/comment_sticker.png" />
                    </div>
                </div>
            </form>
            </div>
        </li>
        </div>
        );
    }
};

export default withRouter(FeedIndexItem);