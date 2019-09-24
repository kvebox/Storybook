export const fetchPosts = user => $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}/posts`
});

export const fetchPost = (user, postId) => $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}/posts/${postId}`
});

export const createPost = (user, post) => $.ajax({
    method: 'POST',
    url: `/api/users/${user.id}/posts`,
    data: { post }
});

export const editPost = (user, post) => $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}/posts/${post.id}`,
    data: { post }
});

export const deletePost = (user, postId) => $.ajax({
    method: 'DELETE',
    url: `/api/users/${user.id}/posts/${postId}`,
    data: { postId }
});


// post = {post: {body: 'hello world', author_id: 2}}

// $.ajax({
//     method: 'post',
//     url: '/api/users/1/posts',
//     data: post
// }) 