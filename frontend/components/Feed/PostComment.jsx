import React from 'react';
import PostCommentItem from './PostCommentItem';


class PostComment extends React.Component {
    constructor({ props }) {
        super(props);
        this.state = {
            comments: null
        };
    }


    render() {
        if (this.props.post.comments === undefined) return null;
        let comments = this.props.post.comments.map((comment, id) => {
            return <PostCommentItem key={id}
                                    comment={comment}
                                    post={this.props.post}
                                    deletePostComment={this.props.deletePostComment} /> });
        return (
            <div >{comments}</div>
        );
    }
};

export default PostComment;