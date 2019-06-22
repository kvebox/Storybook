import React from 'react';
import Dropdown from '../Feed/FeedDropdown';

class PostCommentItem extends React.Component {
    constructor({ props }) {
        super(props);
        this.state = {
            dropdown: false,
        };
        this.getDropdown = this.getDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    }

    hideDropdown(){
        this.setState({dropdown: false});
    }

    getDropdown(){
        this.setState({dropdown: !false});
    }


    render() {

        let comment = this.props.comment;
        return (
            <li className='commentContentContainer'>


                <div className='commentProfileCrop'>
                    <img src='/images/profile_1.png'/>
                </div>
                <div className='commentReactionContainer'>
                    <div className='commentContentBodyContainer'>
                        <div className='commentBodyContent'>
                            <span className='commentContentAuthor'>First LastName</span>
                            <span className='commentContentBody'>{comment.body}</span>
                        </div>
                        <div className="options">
                            <div onClick={() => this.getDropdown()} className='post-comment-options-dropdown-trigger'>···</div>

                            {(this.state.dropdown) ? <Dropdown
                                type={'postComment'}
                                hideDropdown={this.hideDropdown}
                            /> : ''}
                        </div>
                        
                    </div>



                    <div className='commentReactions'>
                        <a>Like</a>
                        <span>·</span>
                        <a>Reply</a>
                        <span>·</span>
                        <span>1hr</span>
                        {/* <button onClick={this.props.deletePostComment(this.props.post ,this.props.comment)}>Delete</button> */}
                    </div>
                </div>
            </li>
        );
    }
};

export default PostCommentItem;