import React from 'react';
import PostCreateWidgetContainer from '../PostCreateWidgetContainer';
import { withRouter } from 'react-router';
import FeedIndexItem from './FeedIndexItem';
import CreatePostModalContainer from '../Widgets/CreatePostModalContainer';
import FeedWidgetBarContainer from '../Feed/FeedWidgetBarContainer';
import NavContainer from '../NavContainer';
import FeedNavigationBarContainer from '../Feed/FeedNavigationBarContainer';

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
            return <div className='postModal'><CreatePostModalContainer/>
            </div>
        }
        return <div className='postNormal'><PostCreateWidgetContainer /></div>
    }

    showModal(){
        (this.state.modal == true) ? this.setState({modal:false}) : this.setState({modal:true});
    }


    render() {
        let allposts = this.props.posts.map((post, id) => {
            return <FeedIndexItem key={id} user={this.props.currentUser} post={post}/>
        });
        return (<>
            
            {/* <NavContainer /> */}
            <div className="spacer"></div>
            <div className="main-container">
                <FeedNavigationBarContainer />
                <div className="feed-main-body">
                    {this.returnCreate()}
                    {/* <div className='modalBackground'></div> */}
                    <div className="feed-index">
                        <ul className="feed-posts">
                            {allposts}
                        </ul>
                    </div>
                </div>
                <FeedWidgetBarContainer />
            </div>
            </>
        )
    }

}

export default withRouter(FeedIndex);