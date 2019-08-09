import React from 'react';
import PostCreateWidgetContainer from '../PostCreateWidgetContainer';
import { withRouter } from 'react-router';
import FeedIndexItem from './FeedIndexItem';
import CreatePostModal from '../Widgets/CreatePostModal';

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            edited: false
        };
        this.hideModal = this.hideModal.bind(this);
        this.triggerEdit = this.triggerEdit.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserPosts(this.props.currentUser);
    }

    componentDidUpdate(prevProps){
        if (prevProps.posts.length != this.props.posts.length){
            this.setState({posts: this.props.posts});
        } 

        if (prevProps.modal){
            this.returnCreate();
        }

        if (this.state.edited){
            this.props.fetchUserPosts(this.props.currentUser);
            this.setState({edited: false});
        }
    }

    triggerEdit(){
        this.setState({edited: true});
    }

    showModal() {
        let bg = document.getElementsByClassName('modalBackground');
        bg[0].style.display = 'block';
        this.setState({ modal: true });
    }

    hideModal() {
        let bg = document.getElementsByClassName('modalBackground');
        bg[0].style.display = 'none';
        this.setState({ modal: false });
    }

    returnCreate() {
        if (this.state.modal){
            return <div className='postModal'>
                <CreatePostModal currentUser = {this.props.currentUser} 
                                 hideModal = {this.hideModal}
                                 createPost = {this.props.createPost}/>
            </div> 
        } else {
        
        return <div className='postNormal'
                    onClick={() => this.showModal()}><PostCreateWidgetContainer /></div>
        }
    }

    render() {
        let posts = this.props.posts.map((post, id) => {
            return <FeedIndexItem 
                key={id}
                comments={this.props.comments}
                deletePost={this.props.deletePost}
                editPost={this.props.editPost}
                user={this.props.currentUser} 
                triggerEdit ={this.triggerEdit}
                post={post}
                fetchPostComments={this.props.fetchPostComments}
                createPostComment={this.props.createPostComment}/>
        });
        return (<>
            <div className="feed-main-body">
                {this.returnCreate()}
                <div className='modalBackground'
                onClick={()=>this.hideModal()}></div>
                <div className="feed-index">
                    <ul className="feed-posts">
                        {posts}
                    </ul>
                </div>
            </div>
        </>
        )
    }

}

export default withRouter(FeedIndex);