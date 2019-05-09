import React from 'react';
import PostCreateWidgetContainer from '../PostCreateWidgetContainer';
import { withRouter } from 'react-router';
import FeedIndexItem from './FeedIndexItem';

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
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


    render() {
        let allposts = this.props.posts.map((post, id) => {
            return <FeedIndexItem key={id} user={this.props.currentUser} post={post}/>
        });
        return (
            <div className="feed-main-body">
                <PostCreateWidgetContainer/>
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