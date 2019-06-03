import React from 'react';
import PostCreateWidgetContainer from '../PostCreateWidgetContainer';
import { withRouter } from 'react-router';
import FeedIndexItem from './FeedIndexItem';
import CreatePostModalContainer from '../Widgets/CreatePostModalContainer';

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            modal: true
        };
    }

    componentDidMount() {
        this.props.fetchUserPosts(this.props.currentUser);
    }

    componentDidUpdate(prevProps){
        if (prevProps.posts.length != this.props.posts.length){
            this.setState({posts: this.props.posts});
        } 
    }

    returnCreate() {
        if (this.state.modal){
            return <CreatePostModalContainer/>
        }
        return <CreatePostWidgetContainer />
    }


    render() {
        let allposts = this.props.posts.map((post, id) => {
            return <FeedIndexItem key={id} user={this.props.currentUser} post={post}/>
        });
        return (
            <div className="feed-main-body">
                {this.returnCreate()}
                {/* <CreatePostModalContainer /> */}
                {/* <PostCreateWidgetContainer/> */}
                {/* <ul className="create-post"><li ><PostCreateWidgetContainer/></li></ul> */}
                <div className="feed-index">
                    <ul className="feed-posts">
                        {allposts}
                    </ul>

                </div>
            </div>
        )
    }

}

export default withRouter(FeedIndex);