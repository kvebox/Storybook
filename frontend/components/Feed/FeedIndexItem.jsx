import React from 'react';
import { withRouter } from 'react-router';


export default ({post}) => {

    return (
        <h2>{post.body}</h2>
    );
};