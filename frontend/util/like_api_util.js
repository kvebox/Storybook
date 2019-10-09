export const fetchPostLikes = post => $.ajax({
    method: 'GET',
    url: `/api/posts/${post.id}/likes`
});

export const createPostLike = (post, like) => $.ajax({
    method: 'POST',
    url: `/api/posts/${post.id}/likes`,
    data: {like}
});

export const deletePostLike = (post, like) => $.ajax({
    method: 'DELETE',
    url: `/api/posts/${post.id}/likes/${like.id}`,
    data: {post, like}
});