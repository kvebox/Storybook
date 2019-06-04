import React from 'react';
import { withRouter } from 'react-router';

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author_id: this.props.currentUser.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.props.currentUser, this.state);
        this.setState({ body: '' });
    }

    update(e) {
        this.setState({ body: e.target.value });
    }

    render() {
        return (
            
                <div className='modalContainer'>
                    <div className='modalHeadContainer'>
                        <div className='modalHeader'>Create Post</div>
                        <div className='modalCancel'>X</div>
                    </div>

                <div className='modalFormContainer'>
                    <div className='modalCover'><img className='modalImage' src='/images/profile_2.png' /></div>
                    <form>
                        <textarea
                            onChange={e=>this.update(e)}
                            className='modalTextInput'
                            placeholder={`What's on your mind, ${this.props.currentUser.first_name}?`} />
                    </form>
                </div>
        
                <ul className="create-post-options">
                    <li className="create-post-option" >
                        <img className="create-post-icon" src="/images/add_photo.png" />Photo/Video</li>
                    <li className="create-post-option" >
                        <img className="create-post-icon" src="/images/add_tag.png" />Tag Friends</li>
                    <li className="create-post-option" >
                        <img className="create-post-icon" src="/images/add_reaction.png" />Feeling/Acti...</li>
                    <li className="create-post-option" >...</li>
                </ul>

                <div className='modalShare'>
                    <ul>
                        <li>
                            <div className='optionsLeft'>
                                <img className='select' src='/images/create_selected.png'/>
                                <img className='modalShareOptions' src='/images/create_newsfeed.png'/>
                                News Feed 
                            </div>
                            <div className='modalShareDropdown'>
                                <img src='/images/create_visibility.png' />
                                Friends
                                <img src='/images/create_dropdown.png' />
                            </div>
                        </li>                    
                    </ul>

                    <div className='modalShareButtons'>
                        <div className='shareDropdown'>
                            <img className='dropdownIcon' src='/images/menu_dropdown.png' />
                            See More</div>
                        <button className='shareButton' onClick={this.handleSubmit}>Share</button>
                    </div>
                </div>
            </div>

        
        )
    }

}

export default withRouter(FeedIndex);