import React from 'react';
import PostCommentItem from './PostCommentItem';

class PostComment extends React.Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchPostComments(this.props.post);
    }


    render() {
        if (this.props.comments.length == 0) return null;
        let comments = this.props.comments.map((comment, id) => {
            return <PostCommentItem /> });
        return (
            <div>{comments}</div>
        );
    }
};

export default PostComment;