import React from 'react';
import { withRouter } from 'react-router';
import Moment from 'react-moment';
import 'moment-timezone';
import { Link } from 'react-router-dom';
import FeedDropdownContainer from './FeedDropdownContainer';
import EditModal from './EditModal';
import PostCommentContainer from './PostCommentContainer';
import ReactionModule from './ReactionModule';


class FeedIndexItem extends React.Component {
    constructor({props}) {
        super(props);
        this.state = {
            likes: {},
            numLikes: 1,
            comments: null,
            author_id: 0,
            created_at: "",
            dropdown: false,
            modal: false,
            commentBody: "",
            commentDropdown: false
        };

        this.commentDropdown = this.state.commentDropdown;
        this.modal = React.createRef();
        this.hideDropdown = this.hideDropdown.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.triggerEditModal = this.triggerEditModal.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.changeCommentDropdown = this.changeCommentDropdown.bind(this);
        this.focus = this.focus.bind(this);
    }

    changeCommentDropdown(){
        this.setState({commentDropdown: !false});
        this.commentDropdown = true;
    }

    handleSubmit(e){
        e.preventDefault();
        let comment = {
            post_id: this.props.post.id,
            body: this.state.commentBody,
            comment_author: this.props.user.id // foreign key
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
        this.setState({commentDropdown: false });
        this.commentDropdown = false;
    }
    
    componentDidMount(){
        let likes = this.props.fetchPostLikes(this.props.post);
        this.setState({likes: likes});
        this.setState({numLikes: Object.keys(likes).length});
    }

    getDropdown(){
        this.setState({dropdown: !this.state.dropdown});
    }

    focus(className, indexKey) {
        let f = document.getElementsByClassName(className);
        f[indexKey].focus();
    }

    like(){
        // debugger
        let like = {
            post_id: this.props.post.id,
            liker_id: this.props.currentUser.id
        };
        this.props.createPostLike(this.props.post, like);
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

            
            <ReactionModule 
                currentUser = {this.props.currentUser}
                likes = {this.state.likes}
                numLikes = {this.state.numLikes}/>

            <div className="post-options">
                <span onClick={() => this.like()}><img className='post_icon' src='/images/like.png'></img>Like</span>
                <span onClick={() => this.focus('comment-input', this.props.indexKey)}><img className='post_icon' src='/images/comment.png'></img>Comment</span>
                {/* <span><img className='post_icon' src='/images/share.png'></img>Share</span> */}
            </div>

            <ul className='post-comments-container'>
                    <PostCommentContainer 
                    hideDropdown = {this.hideDropdown}
                    commentDropdown = {this.commentDropdown}
                    changeCommentDropdown = {this.changeCommentDropdown}
                    post={this.props.post} />
            </ul>

            <form className="comment" onSubmit={e => this.handleSubmit(e)}>
                <div className="comment-crop">
                        <img className="comment-placeholder" src="/images/profile_2.png"/>
                </div>
                <div className="comment-input-container">
                    <input className="comment-input" type="text" 
                           placeholder="Write a comment..."
                           value = {this.state.commentBody}
                           onChange={e => this.handleUpdate(e)}></input>
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