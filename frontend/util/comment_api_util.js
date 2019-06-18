export const fetchPostComments = post => $.ajax({
    method: 'GET',
    url: `/api/posts/${post.id}/comments`
});

export const createPostComment = (post,comment) => $.ajax({
    method: 'POST',
    url: `/api/posts/${post.id}/comments`,
    data: {comment}
});



// post = {post: {body: 'hello world', author_id: 2}}

// $.ajax({
//     method: 'post',
//     url: '/api/users/1/posts',
//     data: post
// }) 