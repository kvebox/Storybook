import React from 'react';
import { withRouter } from 'react-router';


class PostCreateWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author_id: this.props.currentUser.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createPost(this.props.currentUser, this.state);
        this.setState({body: ''});
    }

    update(e){
        this.setState({body: e.target.value});
    }

    render() {
        return (
            <div className="post-widget">
                    <div className='modalHeadContainer'>
                        <div className='modalHeader'>Create Post</div>
                    </div>
                <div className='modalFormContainer'>
                    <div className='modalCover'><img className='modalImage' src='/images/profile_2.png' /></div>
                    <form>
                        <textarea
                            onChange={e => this.update(e)}
                            className='post-create-input'
                            placeholder={`What's on your mind ${this.props.currentUser.first_name}?`} />
                    </form>
                </div>

                <div className='modalSpacer'></div>

                <ul className="create-post-options">
                    <li className="create-post-option" >
                        <img className="create-post-icon" src="/images/add_photo.png" />Photo/Video</li>
                    <li className="create-post-option" >
                        <img className="create-post-icon" src="/images/add_tag.png" />Tag Friends</li>
                    <li className="create-post-option" >
                        <img className="create-post-icon" src="/images/add_reaction.png" />Feeling/Acti...</li>
                    <li className="create-post-option" >...</li>
                </ul>
            </div>

        )
    }

}

export default withRouter(PostCreateWidget);