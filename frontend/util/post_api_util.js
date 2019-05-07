export const fetchPosts = user => $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}/posts`
});

export const fetchPost = (user, post) => $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}/posts/${post.id}`
});

export const createPost = (user, post) => $.ajax({
    method: 'POST',
    url: `/api/users/${user.id}/posts`,
    data: {post}
});