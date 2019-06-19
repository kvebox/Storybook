import React from 'react';

class PostCommentItem extends React.Component {
    constructor({ props }) {
        super(props);
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
                        <span className='commentContentAuthor'>First LastName</span>
                        <span className='commentContentBody'>{comment.body}</span>
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