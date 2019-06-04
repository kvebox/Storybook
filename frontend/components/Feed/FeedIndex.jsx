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
        };
        // this.showModal = this.showModal.bind(this);
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
    }

    returnCreate() {
        // console.log('updated!')

        // this.setState({modal: false})
        // return <div className='postModal'><CreatePostModalContainer/></div>

        if (this.state.modal){
            return <div className='postModal'><CreatePostModalContainer/>
            </div> 
        } else {
        
        return <div className='postNormal'
                    onClick={() => this.showModal()}><PostCreateWidgetContainer /></div>
        }
    }

    showModal(){
        let bg = document.getElementsByClassName('modalBackground');
        bg[0].style.display = 'block';
        this.setState({modal:true});
        }
        
    hideModal(){
        let bg = document.getElementsByClassName('modalBackground');
        bg[0].style.display = 'none';
        this.setState({modal:false});
    }


    render() {
        let allposts = this.props.posts.map((post, id) => {
            return <FeedIndexItem key={id} user={this.props.currentUser} post={post}/>
        });
        return (<>
            <div className="feed-main-body">
                {this.returnCreate()}
                <div className='modalBackground'
                onClick={()=>this.hideModal()}></div>
                <div className="feed-index">
                    <ul className="feed-posts">
                        {allposts}
                    </ul>
                </div>
            </div>
        </>
        )
    }

}

export default withRouter(FeedIndex);